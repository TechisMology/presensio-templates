---
name: Neo-Academic Bold
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#434655'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#006229'
  on-tertiary: '#ffffff'
  tertiary-container: '#007e37'
  on-tertiary-container: '#c1ffc5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  border-width: 3px
  shadow-offset: 6px
---

## Brand & Style
The design system adopts a **Neo-Brutalist** aesthetic tailored for the educational sector. It rejects the "softness" of traditional SaaS in favor of high-impact clarity, using structural honesty and raw geometric shapes to communicate authority and reliability. 

The personality is energetic yet disciplined—perfect for school administration where attendance and data require immediate attention. The emotional response is one of confidence; the UI feels "physical" and tactile, like high-end stationery or architectural signage. Key traits include unyielding black borders, high-contrast surfaces, and an emphasis on functional playfulness through purposeful rotation and hard shadows.

## Colors
The palette utilizes high-chroma primary colors against a stark monochromatic base. 
- **Primary (Blue):** Used for main actions, navigation states, and primary branding.
- **Secondary (Yellow):** Used for attention-grabbing elements, warnings, and highlighting key attendance metrics.
- **Success (Green):** Specifically reserved for positive attendance markers and "Safe" status indicators.
- **Neutral/Stroke:** Pure Black (#000000) is used for all borders, shadows, and text to maintain maximum contrast and the signature Brutalist edge.
- **Surface:** A clean White (#FFFFFF) serves as the primary card background to ensure readability, with Light Gray (#F5F5F5) providing subtle depth for page backgrounds.

## Typography
The typography is built on **Hanken Grotesk** for its sharp, contemporary geometry and exceptional readability at heavy weights. For technical data and labels, **Space Grotesk** is used to introduce a subtle "technical" feel that complements the Neo-Brutalist structure.

All headings should favor a tight line-height and negative letter-spacing for a dense, impactful look. Body text maintains a generous line-height to balance the "heaviness" of the surrounding UI elements.

## Layout & Spacing
This design system uses a **Fluid Grid** model with a distinct "Chunky" spacing rhythm. Layouts are defined by 24px (md) internal gutters and 40px (lg) margins to prevent the bold UI elements from feeling cluttered.

- **Desktop:** 12-column grid, 24px gutters.
- **Tablet:** 8-column grid, 16px gutters.
- **Mobile:** 4-column grid, 16px gutters.

The layout philosophy relies on "Object Grouping"—cards and containers have wide internal padding (24px or 32px) to provide visual breathing room for the thick 3px borders and hard shadows.

## Elevation & Depth
Depth is not conveyed through light or shadow blurs, but through **Hard Offsets**. 
- **Shadow Style:** Use a 100% opacity black shadow (#000000). The default offset is `6px 6px`.
- **Interaction:** On hover, the offset should increase or the element should "push down" (translate x and y to match the shadow offset), creating a tactile mechanical feel.
- **Rotation:** To emphasize the "Neo" in Neo-Brutalism, large cards or floating items should utilize a subtle `1deg` to `-1deg` rotation on hover to break the rigid grid and feel more dynamic.
- **Borders:** Every container and interactive element must have a solid 3px or 4px black border.

## Shapes
Despite the aggressive borders and shadows, the system uses **Rounded** corners to maintain a "Premium SaaS" feel. 
- Standard buttons and inputs: **16px** (rounded-lg).
- Main Content Cards: **24px** (rounded-xl).
- Large sections or Modal containers: **32px**.

This juxtaposition of thick, harsh black lines with soft, friendly corners creates the distinctive "Presensio" look—professional yet modern.

## Components

### Neo-Brutalist Buttons
- **Primary:** Blue background, 3px black border, 6px black hard shadow. Text in White, Heavy weight.
- **Secondary:** Yellow background, 3px black border, 4px black hard shadow.
- **Interaction:** On click, `transform: translate(4px, 4px)` and `box-shadow: 0px 0px 0px`.

### Floating Cards
- White background, 3px black border, 8px hard shadow.
- **Hover State:** Rotate by `-1.5deg` and increase shadow to 12px for a "lifting" effect.
- Internal padding: 32px for headers, 24px for body content.

### High-Contrast Tables
- **Header:** Primary Blue background with White text, 3px bottom border.
- **Rows:** Alternating White and Light Gray backgrounds.
- **Cells:** 3px vertical borders to create a clear "grid" feel.
- **Selection:** Selected rows should flash to Secondary Yellow.

### Input Fields
- White background, 3px black border. 
- **Focus:** Border remains black but thickness increases to 4px, and a 4px Blue hard shadow appears.
- Placeholder text: 50% opacity black.

### Attendance Chips
- Small, pill-shaped with 2px borders.
- **Present:** Green background.
- **Late:** Yellow background.
- **Absent:** White background with a "Red" (#EF4444) text/border.