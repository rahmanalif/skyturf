
module.exports = {
  darkMode: 'selector',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        "2xl": '1400px'
      }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#39FF14',
          hover: '#32e012'
        },
        dark: {
          DEFAULT: '#0a0a0a',
          surface: '#1a1a1a'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(57, 255, 20, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(57, 255, 20, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      }
    }
  }
}
