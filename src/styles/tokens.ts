/**
 * Tech Soul Design Token System
 * Single source of truth for all design tokens.
 * Derived from DESIGN.md brand guidelines.
 *
 * Usage in components:
 *   import { tokens } from '@/styles/tokens'
 *   tokens.colors.primary → '#7C3AED'
 */

export const tokens = {
  // ─── Color Palette ───────────────────────────────────────────────────────
  colors: {
    // Backgrounds
    background: '#0D1117',
    surface: '#161B22',
    surfaceDim: '#15121b',
    surfaceBright: '#3c3742',
    surfaceContainerLowest: '#100d16',
    surfaceContainerLow: '#1d1a24',
    surfaceContainer: '#221e28',
    surfaceContainerHigh: '#2c2833',
    surfaceContainerHighest: '#37333e',
    surfaceVariant: '#37333e',

    // On-surface text
    onSurface: '#e8dfee',
    onSurfaceVariant: '#ccc3d8',
    inverseOnSurface: '#332f39',
    inverseSurface: '#e8dfee',
    onBackground: '#e8dfee',

    // Borders
    outline: '#958da1',
    outlineVariant: '#4a4455',

    // Primary — Violet
    primary: '#7C3AED',
    onPrimary: '#ffffff',
    primaryContainer: '#7c3aed',
    onPrimaryContainer: '#ede0ff',
    primaryFixed: '#eaddff',
    primaryFixedDim: '#d2bbff',
    onPrimaryFixed: '#25005a',
    onPrimaryFixedVariant: '#5a00c6',
    inversePrimary: '#732ee4',
    surfaceTint: '#d2bbff',

    // Secondary — Cyan
    secondary: '#4cd7f6',
    onSecondary: '#003640',
    secondaryContainer: '#03b5d3',
    onSecondaryContainer: '#00424e',
    secondaryFixed: '#acedff',
    secondaryFixedDim: '#4cd7f6',
    onSecondaryFixed: '#001f26',
    onSecondaryFixedVariant: '#004e5c',

    // Tertiary — Amber
    tertiary: '#ffb784',
    onTertiary: '#4f2500',
    tertiaryContainer: '#a15100',
    onTertiaryContainer: '#ffe0cd',
    tertiaryFixed: '#ffdcc6',
    tertiaryFixedDim: '#ffb784',
    onTertiaryFixed: '#301400',
    onTertiaryFixedVariant: '#713700',

    // Error
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',

    // Utility
    white: '#ffffff',
    transparent: 'transparent',
  },

  // ─── Typography ──────────────────────────────────────────────────────────
  typography: {
    fonts: {
      display: ['Hanken Grotesk', 'sans-serif'],
      headline: ['Hanken Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      label: ['Geist', 'monospace'],
      mono: ['Geist', 'monospace'],
    },
    sizes: {
      displayLg: '4rem',        // 64px — desktop hero
      displayLgMobile: '2.5rem',// 40px — mobile hero
      headlineLg: '2rem',       // 32px
      headlineMd: '1.5rem',     // 24px
      bodyLg: '1.125rem',       // 18px
      bodyMd: '1rem',           // 16px
      labelMd: '0.875rem',      // 14px
      monoSm: '0.75rem',        // 12px
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeights: {
      tight: '1.1',
      snug: '1.2',
      normal: '1.4',
      relaxed: '1.6',
    },
    letterSpacings: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.05em',
      wider: '0.2em',
    },
  },

  // ─── Spacing ─────────────────────────────────────────────────────────────
  spacing: {
    unit: '0.5rem',        // 8px base unit
    xs: '0.75rem',         // 12px — stack-sm
    sm: '1rem',            // 16px
    md: '1.5rem',          // 24px — stack-md / gutter
    lg: '3rem',            // 48px — stack-lg
    xl: '4rem',            // 64px — margin-desktop
    containerMax: '80rem', // 1280px
    marginMobile: '1.25rem',
    marginDesktop: '4rem',
  },

  // ─── Border Radius ───────────────────────────────────────────────────────
  radii: {
    sm: '0.25rem',   // 4px — inputs, chips
    DEFAULT: '0.5rem', // 8px — buttons, standard
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px — cards
    xl: '1.5rem',    // 24px — large sections
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px',  // pills, avatars
  },

  // ─── Shadows ─────────────────────────────────────────────────────────────
  shadows: {
    // Glow-style: large, diffused, tinted with primary violet
    none: 'none',
    sm: '0 1px 3px rgba(0,0,0,0.3)',
    DEFAULT: '0 4px 16px rgba(0,0,0,0.4)',
    md: '0 8px 24px rgba(0,0,0,0.4)',
    lg: '0 20px 50px rgba(0,0,0,0.5)',
    glow: '0 0 30px rgba(124, 58, 237, 0.3)',    // primary glow
    glowSm: '0 0 12px rgba(124, 58, 237, 0.2)',
    glowLg: '0 0 60px rgba(124, 58, 237, 0.4)',
    glowCyan: '0 0 30px rgba(76, 215, 246, 0.3)',
    card: '0 25px 50px -12px rgba(124, 58, 237, 0.2)',
    navbar: '0 20px 50px rgba(124,58,237,0.08)',
  },

  // ─── Gradients ───────────────────────────────────────────────────────────
  gradients: {
    // Primary CTA: Violet → Cyan
    primary: 'linear-gradient(135deg, #7C3AED 0%, #4cd7f6 100%)',
    primarySubtle: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 70%)',
    // Text gradient
    text: 'linear-gradient(135deg, #d2bbff 0%, #7C3AED 100%)',
    // Surface card
    card: 'linear-gradient(165deg, rgba(34,30,40,1) 0%, rgba(21,18,27,1) 100%)',
    // Ambient glow overlay
    ambientTop: 'radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 60%)',
  },

  // ─── Glassmorphism ───────────────────────────────────────────────────────
  glass: {
    background: 'rgba(22, 27, 34, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
    blur: 'blur(20px)',
    navbarBg: 'rgba(22, 27, 34, 0.85)',
    navbarBorder: 'rgba(255, 255, 255, 0.05)',
  },

  // ─── Animation ───────────────────────────────────────────────────────────
  animation: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

export type Tokens = typeof tokens
