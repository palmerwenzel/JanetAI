# Phase 2: MVP - The Capture Loop

## Scope

This phase builds on the basic shell to deliver the core value proposition of Janet. The goal is for a user to be able to type any piece of information into the input field, press Enter, and have Janet intelligently classify and save it. This will be the first truly *usable* version of the application.

## Deliverables

-   An interactive input field that accepts user submissions.
-   A backend service that receives the input and classifies its intent (note, task, or link).
-   A local SQLite database to persist all captured entries.

---

## Features & Actionable Steps

### 1. Implement Frontend Input Handling

-   **Description:** The user can type in the input field and submit their query.
-   **Steps:**
    1.  In `+page.svelte`, add a keydown event handler to the `Input` component.
    2.  In the handler, check if the `Enter` key was pressed.
    3.  If Enter is pressed and the input is not empty, call a new Tauri command (`handle_submit`).
    4.  Pass the current value of the input to the command.
    5.  Clear the input field after successful submission.

### 2. Set Up Local Database

-   **Description:** Create the database and table structure to store captured information.
-   **Steps:**
    1.  Add `rusqlite` as a dependency in `src-tauri/Cargo.toml`.
    2.  Create a new `database.rs` module in the Tauri backend.
    3.  Write a function to initialize the SQLite database if it doesn't exist.
    4.  Write an initialization function that creates an `entries` table (e.g., with `id`, `content`, `type`, `created_at` columns).
    5.  Call this initialization logic when the Tauri application starts.

### 3. Implement Intent-Detection Backend

-   **Description:** The Rust backend will receive user input, use an LLM to determine intent, and save the result.
-   **Steps:**
    1.  Create the `handle_submit` Tauri command in `src-tauri/src/main.rs`.
    2.  This command will take the user's text input as an argument.
    3.  The command will make a secure API call to OpenAI, sending the input and a carefully crafted prompt asking for classification ("note", "task", "link", etc.).
    4.  The command will parse the response from the OpenAI API.
    5.  The command will call a database function to insert the classified entry into the `entries` table. 