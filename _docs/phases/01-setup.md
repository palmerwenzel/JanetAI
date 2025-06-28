# Phase 1: Setup & Foundation

## Scope

This phase focuses on creating the fundamental "shell" of the application. The goal is to have a window that appears on screen via a global hotkey and contains our basic, unchangeable UI. This phase delivers no persistent value to the user but is the essential technical foundation upon which all features will be built.

## Deliverables

-   A desktop application window that can be opened and closed.
-   A global hotkey to toggle the window's visibility.
-   A basic, non-interactive UI shell that reflects our chosen style guide.

---

## Features & Actionable Steps

### 1. Configure Global Hotkey

-   **Description:** The user can press a key combination anywhere in the OS to summon the Janet window.
-   **Steps:**
    1.  Access the Tauri application builder in `src-tauri/src/main.rs`.
    2.  Use the `GlobalHotkeyManager` to register a hotkey (e.g., `Ctrl+Space` or `Super+Space`).
    3.  Create an event listener for the hotkey trigger.
    4.  In the event handler, get the main application window.
    5.  Toggle the window's visibility (show if hidden, hide if visible).

### 2. Implement Window Management

-   **Description:** The application window should behave like a command palette: it should be borderless, appear centered, and hide itself when it loses focus.
-   **Steps:**
    1.  Modify the `tauri.conf.json` file to set `decorations` to `false` and `transparent` to `true`.
    2.  In `src-tauri/src/main.rs`, configure the window to be "always on top".
    3.  Create a `on_focus_lost` event listener for the main window.
    4.  In the event handler, hide the window.
    5.  Ensure the window is centered on the primary monitor when it is shown.

### 3. Basic UI Shell

-   **Description:** The Svelte frontend should display the static UI shell with our defined theme, ready for future interaction.
-   **Steps:**
    1.  Confirm the `+page.svelte` file displays our dark theme background.
    2.  Confirm the custom `Input.svelte` component is centered on the page.
    3.  Confirm the `Geist Sans` font is applied correctly to all text.
    4.  The input field should be visible but will have no logic attached to it yet. 