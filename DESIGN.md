# Design System

## Colors
- **Primary**: `#4CD964` (Green)
- **Primary Hover**: `#3CC954`
- **Background Light**: `#ffffff`
- **Background Dark**: `#102210`
- **Slate Accent**: `#64748b`
- **Slate Dark**: `#0f172a`

## Typography
- **Display Font**: "Outfit", "Inter", sans-serif

## Shape
- **Default Radius**: `0.375rem` (6px)
- **Large Radius**: `0.5rem` (8px)
- **Extra Large**: `0.75rem` (12px)
- **2XL**: `1rem` (16px)

## Components
- **Buttons**: Rounded, Primary Color text on Dark, or Primary Background on Light.
- **Cards**: White with subtle shadows or slate borders.
- **Inputs**: Slate-50 background, focus ring with Primary color.

## Stitch Guidelines
When generating screens:
1. Use Tailwind V4 utility classes.
2. Use `<span className="material-symbols-outlined">icon_name</span>` for icons.
3. Ensure high contrast and premium spacing (py-20, gap-8).
4. Use `framer-motion` for entrances (opacity 0 -> 1).
