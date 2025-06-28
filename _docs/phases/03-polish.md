# Phase 3: Polish & Intelligence

## Scope

With the core capture loop functional, this phase focuses on making Janet truly "intelligent" and delightful to use. We will build the features that allow users to review their captured data and receive proactive assistance from the AI. This phase turns the functional MVP into a polished, feature-rich product.

## Deliverables

-   A UI to view, search, and manage captured entries.
-   Proactive AI features, such as link summarization and collection suggestions.
-   Enhanced keyboard navigation for all application features.

---

## Features & Actionable Steps

### 1. Build the Data Viewer UI

-   **Description:** The user can see and interact with their saved notes, tasks, and links.
-   **Steps:**
    1.  Create a new Svelte component, `DataViewer.svelte`, to display lists of entries.
    2.  Create Tauri commands to fetch all entries from the database (e.g., `get_all_entries`).
    3.  Implement a UI state in `+page.svelte` to toggle between the main input view and the data viewer.
    4.  Add a search bar to filter the displayed entries by content.
    5.  Add the ability to delete entries from the viewer.

### 2. Implement Link Summarization

-   **Description:** When a user saves a link, Janet automatically fetches and saves a summary of its content.
-   **Steps:**
    1.  In the `handle_submit` backend command, if the intent is a "link", trigger a background task.
    2.  The background task will make an HTTP request to the URL to fetch the page content.
    3.  It will then send the content to the OpenAI API with a prompt asking for a concise summary.
    4.  The summary will be saved to a new `summary` column in the `entries` table.
    5.  Display the summary in the `DataViewer` UI when available.

### 3. Proactive Collection Suggestions

-   **Description:** Janet identifies patterns in saved items and suggests creating a "collection" to group them.
-   **Steps:**
    1.  Create a background service in Rust that periodically analyzes the `entries` table.
    2.  The service will look for common keywords or themes among entries (e.g., multiple links about "Svelte").
    3.  If a pattern is found, emit an event to the frontend with a suggestion (e.g., "Create a 'Svelte' collection?").
    4.  Create a UI element (e.g., a toast or notification) to display the suggestion to the user.
    5.  If the user accepts, create the new collection and associate the relevant entries.

### 4. Full Keyboard Navigation

-   **Description:** All parts of the application are navigable without using a mouse.
-   **Steps:**
    1.  Implement hotkeys to switch between the main input and the data viewer (e.g., `Tab` or `Ctrl+L`).
    2.  Enable arrow-key navigation to move up and down the list of items in the `DataViewer`.
    3.  Assign hotkeys for core actions like deleting an item (`Delete` key) or opening a link (`Enter` key). 