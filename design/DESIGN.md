---
name: Tech Soul
colors:
  surface: '#15121b'
  surface-dim: '#15121b'
  surface-bright: '#3c3742'
  surface-container-lowest: '#100d16'
  surface-container-low: '#1d1a24'
  surface-container: '#221e28'
  surface-container-high: '#2c2833'
  surface-container-highest: '#37333e'
  on-surface: '#e8dfee'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#e8dfee'
  inverse-on-surface: '#332f39'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb784'
  on-tertiary: '#4f2500'
  tertiary-container: '#a15100'
  on-tertiary-container: '#ffe0cd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#15121b'
  on-background: '#e8dfee'
  surface-variant: '#37333e'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered to feel like a high-end editorial experience for software discovery. It bridges the gap between technical precision and human warmth. The aesthetic is a fusion of **Modern SaaS** and **Apple-inspired Minimalism**, emphasizing clarity, intentionality, and premium craftsmanship.

The brand personality is **Knowledgeable yet Approachable**. It avoids the aggressive, high-energy tropes of gaming or cyberpunk dark modes in favor of a sophisticated, "Pro" environment that encourages deep focus and trust.

**Key Visual Principles:**
- **Intentional Whitespace:** Large breathability between sections to prevent information overload.
- **High-Fidelity Finishes:** Use of subtle gradients and glassmorphism to create a sense of tactile depth.
- **Human-Centric Clarity:** Bold, legible typography that leads the user through the narrative of software exploration.

## Colors

The palette is anchored in a deep, "Ink" navy that provides a stable foundation for vibrant accents. 

- **Background (#0D1117):** A sophisticated dark navy-black that reduces eye strain and makes content pop.
- **Primary Violet (#7C3AED):** Used for primary actions, progress indicators, and brand-heavy elements. It represents innovation and intelligence.
- **Accent Cyan (#06B6D4):** Used sparingly for secondary callouts, success states, or highlighting technical features.
- **Gradients:** Use linear gradients from Primary to Accent (at 45 degrees) for hero sections and high-impact buttons to create a "liquid light" effect.

## Typography

This design system utilizes a trio of typefaces to establish a clear hierarchy:
- **Hanken Grotesk (Headlines):** High-impact, modern, and sharp. Used for all major display titles and headings to convey confidence.
- **Inter (Body):** The workhorse for readability. Used for descriptions, reviews, and long-form content.
- **Geist (Labels/Meta):** A technical, monospaced-adjacent font used for metadata, tags, and small UI labels to reinforce the "Software/Tech" nature of the platform.

**Editorial Style:** Headlines should use "Sentence case" rather than "Title Case" to maintain a friendly, human tone.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Padding:** Vertical spacing between sections should be generous (stack-lg) to allow the eye to rest and emphasize individual software cards.
- **Alignment:** Left-aligned layouts are preferred for readability, with center-alignment reserved for Hero sections.
- **Rhythm:** All spacing must be a multiple of the 8px base unit to ensure visual mathematical harmony.

## Elevation & Depth

This design system uses a **Glass-Layering** model rather than traditional heavy shadows.

- **Level 0 (Base):** The Background (#0D1117).
- **Level 1 (Surface):** Surface color (#161B22) with a 1px stroke of #FFFFFF at 10% opacity. This defines the edge without using shadows.
- **Level 2 (Float):** Glassmorphic panels using a background blur (20px) and a semi-transparent fill (Surface color at 70% opacity). Used for navigation bars and overlays.
- **Shadows:** Only used on primary buttons and high-level cards. Shadows should be large, diffused, and tinted with the primary color (#7C3AED) at 20% opacity to create a "glow" rather than a dark spot.

## Shapes

The shape language is **Warm and Modern**. 
- **Standard UI (Inputs, Buttons):** 0.5rem (8px) radius.
- **Cards & Containers:** 1rem (16px) or 1.5rem (24px) for larger sections to create a softer, more inviting appearance.
- **Icons:** Use "feather" or "phosphor" style icons with a 2px stroke weight and slightly rounded corners to match the typography's character.

## Components

### Buttons
- **Primary:** Gradient fill (Primary to Accent), white text, bold weight. On hover, increase the intensity of the gradient.
- **Secondary:** Ghost style. Transparent fill with a 1px solid border (#8B949E). On hover, fill with 10% white opacity.
- **Size:** Large (min height 48px) with generous horizontal padding.

### Cards
- Software cards should feature a prominent "Icon/Logo" area. 
- Use Level 1 Surface styling with a subtle hover transition that scales the card by 1.02x and increases the border brightness.

### Inputs
- Dark backgrounds (#0D1117) with a subtle 1px border. 
- Focus state should use a 2px Primary Violet border and a soft violet outer glow.

### Chips & Tags
- Use Geist Mono for tag text.
- Backgrounds should be low-contrast (10% Primary color opacity) with text in full Primary color.

### Navigation Bar
- Always sticky with a heavy background blur (backdrop-filter: blur(20px)).
- Use a 1px bottom border (#FFFFFF @ 5% opacity).