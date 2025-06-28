# Janet: The Universal Task Manager

Janet is a universal, keyboard-first assistant that proactively organizes your digital life. With a single hotkey, Janet allows you to capture thoughts, manage tasks, and find information, seamlessly integrating with your workflow.

This project is built with a focus on being **Lean, Fast, and Intelligent**.

## 📚 Documentation

All project documentation is located in the `_docs/` directory. It is the single source of truth for our project's vision, architecture, and development plan.

-   **[Project Overview](_docs/project-overview.md):** The high-level vision, user stories, and goals for Janet.
-   **[Style Guide](_docs/style-guide.md):** Defines the visual identity, color palette, typography, and component styling conventions.
-   **[Technology Stack](_docs/tech-stack.md):** A detailed guide to our chosen technologies and the best practices for using them.

### Development Phases

Our iterative development plan is broken down into phases. Each phase builds upon the last to deliver a functional product.

-   **[Phase 1: Setup & Foundation](_docs/phases/01-setup.md)**
-   **[Phase 2: MVP - The Capture Loop](_docs/phases/02-mvp.md)**
-   **[Phase 3: Polish & Intelligence](_docs/phases/03-polish.md)**

## 🚀 Getting Started

To get the project running locally for development, follow these steps:

1.  **Prerequisites:** Ensure you have [Rust](https://www.rust-lang.org/learn/get-started) and [Node.js](https://nodejs.org/) installed on your system. You will also need to install the system dependencies required by Tauri, as outlined [here](https://tauri.app/start/prerequisites/).

2.  **Install Dependencies:** Navigate to the application directory and install the Node.js packages.
    ```bash
    cd janet-app
    npm install
    ```

3.  **Run the Development Server:** Once dependencies are installed, you can start the application in development mode.
    ```bash
    npm run tauri dev
    ```
    This will compile the Rust backend and the Svelte frontend, and launch the application. The window will automatically reload when you make changes to the code.

## 📂 Project Structure

-   `_docs/`: Contains all project documentation.
-   `janet-app/`: The main application source code.
    -   `src/`: The Svelte frontend code (components, routes, etc.).
    -   `src-tauri/`: The Rust backend code (Tauri setup, commands, etc.). 