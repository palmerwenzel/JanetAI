# Janet: Technology Stack & Conventions

This document outlines the primary technologies chosen for the Janet application. It also defines the best practices, conventions, and common pitfalls associated with each technology to ensure a consistent, high-quality, and maintainable codebase.

## 1. UI Framework: Svelte

**Purpose:** To build a lean, fast, and highly responsive user interface. Svelte is a compiler that converts component files into highly optimized vanilla JavaScript, resulting in smaller bundles and better performance. This aligns perfectly with Janet's "Lean & Fast" core principle.

**Conventions & Best Practices:**

-   **Component Structure:** All UI elements MUST be built as `.svelte` components. Logic is contained in the `<script>` tag, styles in the `<style>` tag, and markup below.
-   **Reactivity:** Use Svelte 5's runes (e.g., `$state`, `$derived`) for reactive state management. This provides a clear and predictable way to handle state changes.
-   **Props:** Pass data down to child components using props, which are declared with `let { ... } = $props()`.
-   **File Naming:** Component files MUST be named in `PascalCase` (e.g., `ChatPanel.svelte`).

**Common Pitfalls:**

-   **Thinking in React:** Svelte's reactivity model is fundamentally different from React's Hooks. Avoid trying to replicate React patterns directly. Embrace the "write less code" philosophy of Svelte.
-   **Smaller Ecosystem:** While growing rapidly, Svelte's ecosystem of third-party libraries is smaller than React's. We may need to build more components and utilities ourselves, which aligns with our goal of a minimal, bespoke application.

## 2. Styling: Tailwind CSS

**Purpose:** To style the application using a utility-first CSS framework. Tailwind allows for rapid development of custom designs directly within our components.

**Conventions & Best Practices:**

-   **Utility-First:** Embrace the utility-first approach. Style elements by applying utility classes directly in the Svelte markup.
-   **Conditional Classes:** Use the `class:` directive for applying classes conditionally. For example: `class:active={isActive}`.
-   **Configuration over Custom CSS:** Use `tailwind.config.js` to define our theme (colors, spacing, fonts). Avoid writing custom, scoped styles in `.svelte` files unless absolutely necessary.

**Common Pitfalls:**

-   **Long Class Strings:** Markup with many utilities can become hard to read. Keep components small and well-defined to mitigate this. Use a tool like the official Tailwind Prettier plugin to automatically sort classes.
-   **Scoping Conflicts:** Be aware that Tailwind styles are global. While Svelte scopes `<style>` tags by default, Tailwind utilities are not scoped. This is generally what we want, but requires a component-based mindset.

## 3. Local Database: SQLite

**Purpose:** To provide local-first data storage. SQLite is a serverless, self-contained SQL engine that is fast and reliable, ensuring user data remains private and available offline.

**Conventions & Best Practices:**

-   **Backend-Only Access:** The frontend (Svelte code) MUST NOT access the database directly. All database operations MUST be handled by the Rust backend via Tauri commands.
-   **Migrations:** Database schema changes MUST be managed through a migration system (e.g., `sqlx-cli` on the Rust side). This ensures that schema changes are versioned and can be applied consistently.
-   **Query Management:** Use a query builder or ORM (like `sqlx`) in the Rust backend to interact with the database. This helps prevent SQL injection vulnerabilities and provides compile-time checks for SQL queries.

**Common Pitfalls:**

-   **Concurrency:** SQLite is not designed for high-concurrency writes. This is not a concern for Janet, as it's a single-user application, but it's an important limitation to remember.
-   **Data-bloat:** Be mindful of storing large binary data directly in the database. For large files, it's better to store them on the filesystem and save only the file path in the database.

## 4. AI & Intent Detection: OpenAI API

**Purpose:** To power the core intelligent features of Janet by using LLMs for intent detection and other AI-driven tasks.

**Conventions & Best Practices:**

-   **Secure API Key Management:** The OpenAI API key MUST be stored securely on the Rust backend. It should be loaded from an environment variable and NEVER exposed to the frontend.
-   **Backend Proxy:** All API calls to OpenAI MUST be made from the Rust backend. The frontend will call a Tauri command, which then makes the secure request to the OpenAI API.
-   **Prompt Engineering:** Prompts must be carefully designed, versioned, and tested to ensure reliable intent detection. We should maintain a central file for prompt templates.
-   **Cost & Latency Management:** Be mindful of token usage. Use smaller, faster models where possible. Implement timeouts and graceful error handling for API requests.

**Common Pitfalls:**

-   **Inconsistent Responses:** The LLM may not always return perfectly structured data. The backend must rigorously validate and sanitize any response from the API before using it or storing it in the database.
-   **Ignoring Rate Limits:** Unhandled rate limits will lead to a poor user experience. Implement exponential backoff or other retry mechanisms for API requests. 