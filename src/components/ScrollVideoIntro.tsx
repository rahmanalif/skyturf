import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * Math.max(0, Math.min(1, t));

const fadeIn = (progress: number, start: number, end: number) =>
  lerp(0, 1, (progress - start) / (end - start));

const fadeOut = (progress: number, start: number, end: number) =>
  lerp(1, 0, (progress - start) / (end - start));

function setCenteredOverlayStyle(
  element: HTMLDivElement | null,
  opacity: number,
  translateY: number,
  scale = 1,
) {
  if (!element) {
    return;
  }

  element.style.opacity = `${opacity}`;
  element.style.transform =
    `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`;
}

export function ScrollVideoIntro() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoCoverRef = useRef<HTMLDivElement>(null);
  const overlayOneRef = useRef<HTMLDivElement>(null);
  const overlayTwoRef = useRef<HTMLDivElement>(null);
  const overlayThreeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number>(0);
  const lenisRafRef = useRef<number>(0);
  const isMobileRef = useRef<boolean>(false);
  const scrollYRef = useRef<number>(0);
  const lastAppliedTimeRef = useRef<number>(-1);

  useEffect(() => {
    const syncScene = (scrollY: number) => {
      const wrapper = wrapperRef.current;
      const video = videoRef.current;

      if (!wrapper) {
        return;
      }

      isMobileRef.current = window.innerWidth < 768;

      const maxScroll = Math.max(
        wrapper.offsetHeight - window.innerHeight,
        1,
      );
      const rawProgress = (scrollY - wrapper.offsetTop) / maxScroll;
      const progress = clamp(rawProgress, 0, 1);

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const targetTime = progress * video.duration;
        const safeTargetTime = clamp(targetTime, 0, Math.max(video.duration - 0.001, 0));

        if (Math.abs(lastAppliedTimeRef.current - safeTargetTime) > 0.001) {
          video.currentTime = safeTargetTime;
          lastAppliedTimeRef.current = safeTargetTime;
        }
      }

      const indicatorOpacity = progress < 0.12 ? fadeOut(progress, 0.08, 0.12) : 0;

      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = `${indicatorOpacity}`;
        scrollIndicatorRef.current.style.transform =
          `translate(-50%, ${progress * 10}px)`;
      }

      if (isMobileRef.current) {
        setCenteredOverlayStyle(overlayOneRef.current, 0, 32);

        const mobileOverlayTwoOpacity = Math.min(
          fadeIn(progress, 0.3, 0.5),
          fadeOut(progress, 0.76, 0.92),
        );
        const mobileOverlayTwoScale = lerp(0.96, 1, (progress - 0.3) / 0.2);

        setCenteredOverlayStyle(
          overlayTwoRef.current,
          mobileOverlayTwoOpacity,
          lerp(18, -12, progress),
          mobileOverlayTwoScale,
        );

        if (overlayTwoRef.current) {
          overlayTwoRef.current.style.textShadow =
            '0 0 24px rgba(57,255,20,0.35)';
        }

        setCenteredOverlayStyle(overlayThreeRef.current, 0, 18);
        return;
      }

      const overlayOneOpacity =
        progress < 0.15 || progress > 0.42
          ? 0
          : Math.min(fadeIn(progress, 0.15, 0.25), fadeOut(progress, 0.35, 0.42));
      const overlayTwoOpacity =
        progress < 0.42 || progress > 0.72
          ? 0
          : Math.min(fadeIn(progress, 0.42, 0.52), fadeOut(progress, 0.64, 0.72));
      const overlayThreeOpacity = progress < 0.72 ? 0 : fadeIn(progress, 0.72, 0.82);

      setCenteredOverlayStyle(
        overlayOneRef.current,
        overlayOneOpacity,
        lerp(28, -10, progress),
      );

      setCenteredOverlayStyle(
        overlayTwoRef.current,
        overlayTwoOpacity,
        lerp(22, -14, progress),
        lerp(0.95, 1, (progress - 0.42) / 0.1),
      );

      if (overlayTwoRef.current) {
        overlayTwoRef.current.style.textShadow =
          '0 0 60px rgba(57,255,20,0.5)';
      }

      setCenteredOverlayStyle(
        overlayThreeRef.current,
        overlayThreeOpacity,
        lerp(24, -8, progress),
      );
    };

    const updateScene = () => {
      rafIdRef.current = 0;
      syncScene(scrollYRef.current);
    };

    const requestTick = () => {
      if (rafIdRef.current !== 0) {
        return;
      }

      rafIdRef.current = window.requestAnimationFrame(updateScene);
    };

    const handleLoadedMetadata = () => {
      const video = videoRef.current;

      if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
        requestTick();
        return;
      }

      video.currentTime = 0;
      lastAppliedTimeRef.current = 0;
      requestTick();
    };

    const revealFirstFrame = () => {
      const video = videoRef.current;

      if (video) {
        video.style.opacity = '1';
      }

      if (videoCoverRef.current) {
        videoCoverRef.current.style.opacity = '0';
      }

      requestTick();
    };

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
    });

    const onLenisScroll = ({ animatedScroll }: { animatedScroll: number }) => {
      scrollYRef.current = animatedScroll;
      requestTick();
    };

    lenis.on('scroll', onLenisScroll);

    const runLenis = (time: number) => {
      lenis.raf(time);
      lenisRafRef.current = window.requestAnimationFrame(runLenis);
    };

    const video = videoRef.current;
    scrollYRef.current = window.scrollY;
    video?.pause();
    lenisRafRef.current = window.requestAnimationFrame(runLenis);

    requestTick();
    window.addEventListener('resize', requestTick);
    video?.addEventListener('loadedmetadata', handleLoadedMetadata);
    video?.addEventListener('loadeddata', revealFirstFrame);
    video?.addEventListener('seeked', revealFirstFrame);

    return () => {
      if (rafIdRef.current !== 0) {
        window.cancelAnimationFrame(rafIdRef.current);
      }

      if (lenisRafRef.current !== 0) {
        window.cancelAnimationFrame(lenisRafRef.current);
      }

      window.removeEventListener('resize', requestTick);
      video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video?.removeEventListener('loadeddata', revealFirstFrame);
      video?.removeEventListener('seeked', revealFirstFrame);
      lenis.off('scroll', onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes sky-scroll-chevron {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      <div
        ref={wrapperRef}
        className="relative h-[250vh] md:h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">
          <video
            ref={videoRef}
            src="/video/ronaldosui.mp4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
          />

          <div
            ref={videoCoverRef}
            className="absolute inset-0 bg-[#0a0a0a] transition-opacity duration-500"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#0a0a0a_0%,transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

          <div
            ref={overlayOneRef}
            className="pointer-events-none absolute left-1/2 top-1/2 w-[92vw] max-w-5xl text-center text-white opacity-0"
            style={{
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}>
            THE BEAUTIFUL GAME
          </div>

          <div
            ref={overlayTwoRef}
            className="pointer-events-none absolute left-1/2 top-1/2 w-[92vw] max-w-6xl text-center text-brand opacity-0"
            style={{
              transform: 'translate(-50%, -50%) scale(0.95)',
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              fontWeight: 900,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
            SKY TURF
          </div>

          <div
            ref={overlayThreeRef}
            className="pointer-events-none absolute left-1/2 top-1/2 w-[90vw] max-w-3xl text-center text-white/85 opacity-0"
            style={{
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              letterSpacing: '0.1em',
            }}>
            Book your match. Play under the sky.
          </div>

          <div
            ref={scrollIndicatorRef}
            className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-100 transition-opacity duration-300">
            <span className="text-xs uppercase tracking-[0.45em] text-white/50">
              scroll
            </span>
            <span
              className="block text-white/60"
              style={{ animation: 'sky-scroll-chevron 1.15s ease-in-out infinite' }}>
              ˅
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
