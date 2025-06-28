# Janet: Style Guide

This document defines the visual identity, theme, and styling conventions for the Janet application.

## 1. Core Philosophy

The visual design should be **clean, modern, and non-intrusive**. It should feel intelligent and responsive, with a focus on clarity and user experience. The primary aesthetic is a dark theme complemented by warm, energetic gradients.

## 2. Color Palette

Colors are defined as CSS variables in `src/app.css` and mapped in `tailwind.config.js`.

-   **Base Theme (Dark):**
    -   `background`: A near-black (`#111111`).
    -   `foreground`: A soft off-white (`#F8F8F8`).
-   **Primary Accent (Gradient):**
    -   A vibrant, warm gradient spanning the full warm color spectrum: **Purple** → **Magenta/Pink** → **Red** → **Orange**.
    -   Core warm colors: `nebulapurple` (#6A49D2), `neonfuchsia` (#CB40AB), `marssunset` (#F54E5B), `atomictangerine` (#FD7542)
    -   Used for primary interactive elements, focus states, and key branding moments.
    -   Creates an energetic, intelligent feeling that suggests warmth and AI responsiveness.
-   **Secondary Accent (Solid):**
    -   `accent`: The vibrant **Pink** from the gradient, used as a solid color for links and secondary interactive elements.
-   **Semantic Colors:**
    -   `destructive`: A muted, calm red for delete actions or error states.
    -   `warning`: A soft, non-intrusive yellow for warnings.

## 3. Typography

-   **Font Family:**
    -   **Geist Sans:** The primary font for all UI text. It is chosen for its excellent readability and clean, technical aesthetic, which is ideal for an application focused on text and information capture.
    -   **Geist Mono:** Used for any monospaced text, such as code snippets.
-   **Scale:** We use Tailwind's default typographic scale for consistency (e.g., `text-sm`, `text-base`, `text-lg`).

## 4. Sizing and Spacing

-   **Spacing Unit:** The application uses a **4-point grid system**. All spacing values (padding, margins, gaps) are multiples of 4px (0.25rem).
-   **Border Radius:** We use a modern, rounded scale to create a soft and friendly UI.
    -   `sm`: 4px
    -   `md`: 8px (Default)
    -   `lg`: 16px
    -   `full`: 9999px (For circular elements)

## 5. Components

-   Components should be built from scratch using Svelte and styled with Tailwind CSS utility classes.
-   Strive for minimal, reusable, and accessible components.
-   Interactive elements MUST have clear `focus`, `hover`, and `active` states, often utilizing the primary accent gradient or color. 