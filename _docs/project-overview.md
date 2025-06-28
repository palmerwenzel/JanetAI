# Janet: Project Overview

## 1. Vision

Janet is a universal, keyboard-first assistant that proactively organizes your digital life, turning scattered information into structured knowledge.

## 2. Core Principles

-   **Keyboard-First:** Every primary action is accessible via hotkeys. The user interface is designed for efficient, mouse-free navigation and interaction.
-   **Lean & Fast:** The application is lightweight, uses minimal system resources, and responds instantly to user input, ensuring it never disrupts the user's workflow.
-   **Proactive & Intelligent:** Janet understands the user's intent. It anticipates needs, offers suggestions, and provides "intuitive optionality" rather than requiring manual configuration.

## 3. Target User & Core Problem

-   **Target User:** Knowledge workers, including programmers, researchers, students, and writers, who manage a high volume of digital information and context switches throughout their day.
-   **Core Problem:** Janet solves the problem of "disorganized infodumps." It provides a single, reliable place to capture fleeting ideas, links, and tasks, and prevents them from being lost or forgotten by intelligently organizing and resurfacing them.

## 4. Core User Experience & Key Features

The primary interaction is centered around a global hotkey (`Ctrl+Space`) that opens a single, intelligent input field. The user does not need to learn specific commands; they can interact naturally, and Janet will determine their intent.

-   **Intelligent Input & Intent Detection:** The user provides input—a URL, a piece of text, a task—and Janet's AI backend identifies the intent.
    -   **Example (Link):** A user pastes `https://twitter.com/rauchg/status/1721582962153201886`. Janet recognizes it as a link, saves it, and asks, "I've saved this link. Would you like me to add a summary or tag it?"
    -   **Example (Task):** A user types `Remember to deploy the staging server tomorrow at 10am`. Janet identifies this as a to-do item, parses the deadline, and adds it to the user's task list.
    -   **Example (Note):** A user types `The core idea for the marketing brief is 'frictionless capture'`. Janet saves this as a note.
-   **Proactive Organization:** Janet identifies patterns in the user's saved information.
    -   **Example:** After saving several links about "React Server Components," Janet might suggest, "I see you're saving a lot about RSC. Shall I create a 'React Server Components' collection for these?"
-   **Keyboard Navigation:** All features, including viewing lists (tasks, notes), navigating collections, and interacting with saved items, will be accessible through keyboard shortcuts.

## 5. Technical Architecture

-   **Application Framework:** **Tauri**. This choice is critical for adhering to the "Lean & Fast" principle, ensuring the always-on background process has a minimal memory and CPU footprint.
-   **Frontend:** **React/TypeScript** with a modern UI toolkit (e.g., Shadcn UI) for a clean and responsive interface.
-   **AI/Intent-Detection:** LLMs accessed via API (e.g., OpenAI) to process user input. The prompt engineering will focus on reliably classifying intent (e.g., is this a note, a task, or a link?) and extracting relevant entities (e.g., dates, topics).
-   **Data Storage:** **Local-first** using a lightweight, embedded database like **SQLite**. This prioritizes privacy, speed, and offline availability.

## 6. Roadmap

-   **v1.0 (MVP):**
    -   Global hotkey activation.
    -   Core intelligent input field with intent detection for notes, tasks, and links.
    -   Local storage of all captured data.
    -   Basic viewers for notes, tasks, and saved links, navigable by keyboard.
-   **v1.1:**
    -   Proactive suggestions and intelligent grouping/collection creation.
    -   Ability to summarize saved links and content.
-   **Future:**
    -   Optional cloud synchronization between devices.
    -   Richer integrations (Calendar, Email, etc.).
    -   Plugin system for user-defined capabilities. 