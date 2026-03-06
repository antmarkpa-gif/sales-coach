# SALES COACH — Brand Guidelines

## Brand Identity

### Voice & Tone
- **Direct**: No fluff, get to the point
- **Confident**: We know this works
- **Motivating**: Push users to improve
- **Spanish-first**: Primary content in Spanish (LATAM)

### Tagline
"Practica. Mejora. Cierra más."

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| PRIMARY | `#00D67D` | CTAs, success, highlights |
| SECONDARY | `#0A0A0A` | Background, text on primary |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| BACKGROUND | `#0A0A0A` | Main background |
| SURFACE | `#1A1A1A` | Cards, elevated elements |
| SURFACE_HIGH | `#2A2A2A` | Hover states, active cards |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| TEXT_PRIMARY | `#FFFFFF` | Headlines, important text |
| TEXT_SECONDARY | `#A0A0A0` | Body text, descriptions |
| TEXT_MUTED | `#666666` | Timestamps, hints |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| SUCCESS | `#00D67D` | Same as primary |
| WARNING | `#FFB800` | Caution states |
| ERROR | `#FF4444` | Error states |
| INFO | `#0095FF` | Informational |

---

## Typography

### Font Families
- **Headlines**: Space Grotesk (Bold, SemiBold)
- **Body**: Inter (Regular, Medium)

### Type Scale
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| h1 | 32px | Bold | 40px | Screen titles |
| h2 | 24px | SemiBold | 32px | Section headers |
| h3 | 20px | SemiBold | 28px | Card titles |
| body | 16px | Regular | 24px | Body text |
| bodySmall | 14px | Regular | 20px | Secondary text |
| caption | 12px | Medium | 16px | Labels, timestamps |
| button | 16px | SemiBold | 24px | Button text |

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Icon gaps |
| md | 16px | Standard padding |
| lg | 24px | Section spacing |
| xl | 32px | Large gaps |
| xxl | 48px | Screen padding top/bottom |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px | Small elements |
| md | 8px | Buttons, inputs |
| lg | 16px | Cards |
| xl | 24px | Modals |
| full | 9999px | Pills, avatars |

---

## Component Patterns

### Buttons
- **Primary**: bg-PRIMARY, text-SECONDARY, rounded-md
- **Secondary**: border-PRIMARY, text-PRIMARY, rounded-md
- **Ghost**: transparent, text-PRIMARY
- **Destructive**: bg-ERROR, text-white

### Cards
- bg-SURFACE, rounded-lg, p-md
- Shadow: none (flat design)

### Inputs
- bg-SURFACE_HIGH, border-none, rounded-md
- Focus: ring-2 ring-PRIMARY

### Score Display
- 0-40: TEXT_MUTED
- 41-70: WARNING
- 71-85: PRIMARY
- 86-100: PRIMARY + glow effect

---

## Iconography
- Style: Outline (not filled)
- Stroke: 2px
- Size: 24x24 default, 20x20 small
- Library: Expo Vector Icons (Feather set)

---

## Motion
- Duration: 200ms default, 300ms emphasis
- Easing: ease-out for entries, ease-in for exits
- Feedback: Scale to 0.97 on press

---

## Rex (AI Character)
- Personality: Tough but fair customer
- Visual: No avatar (text-only interaction)
- Message style: Short, realistic objections
- Feedback style: Direct, specific, actionable
