# Kanban Task Management App

This document provides an overview and documentation for the Kanban Task Management application, including structure, functions, and usage.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [HTML](#html)
3. [CSS](#css)
4. [JavaScript](#javascript)
   - [Storage Layer](#storage-layer)
   - [Modal Layer](#modal-layer)
   - [Render Layer](#render-layer)
   - [Task Management](#task-management)
   - [Initialization](#initialization)
5. [JSDoc Type Definitions](#jsdoc-type-definitions)
6. [Usage](#usage)

---

## Project Structure

```
/kanban-app
  /assets
    - logo-light.svg
    - favicon.svg
    - icon-board.svg
    - Exit-icon.svg
  /scripts
    - main.js
    - modal.js
    - render.js
    - storage.js
  /styles
    - styles.css
  index.html
  README.md
  kanban_appREADME.md
```

---

## HTML

- The HTML includes a sidebar with boards, a header with board title and add task buttons, columns for TODO, DOING, DONE, and dialogs for adding/viewing tasks.
- Key IDs:
  - `new-task-modal`, `new-task-form`, `new-task-input`, `new-task-desc`, `new-task-status`
  - Columns: `todo`, `doing`, `done`

---

## CSS

- Uses CSS variables for colors, fonts, and box shadows.
- Flexbox and Grid layouts for sidebar and main content.
- Responsive styles for tablet and mobile.
- Modals styled to be centered and visible with a backdrop.

---

## JavaScript

### Storage Layer

Handles saving and retrieving tasks from localStorage.

```js
const TASKS_KEY = "tasks";

/**
 * Retrieves tasks from localStorage.
 * @returns {Task[]} Array of task objects.
 */
export function getTasks() { ... }

/**
 * Saves tasks to localStorage.
 * @param {Task[]} tasks - Array of tasks to save.
 */
export function saveTasks(tasks) { ... }
```

### Modal Layer

Handles opening/closing modals and form validation.

```js
/**
 * Opens the new task modal.
 */
function openNewTaskModal() { ... }

/**
 * Closes the new task modal and resets the form.
 */
function closeTaskModal() { ... }

/**
 * Initializes modal event listeners.
 * @param {Function} addNewTask - Callback to add a new task.
 */
export function initializeModal(addNewTask) { ... }
```

### Render Layer

Handles creating and placing task cards in columns.

```js
/**
 * Creates a task card element.
 * @param {Task} task
 * @returns {HTMLDivElement}
 */
export function createTaskCard(task) { ... }

/**
 * Renders tasks into their respective columns.
 * @param {Task[]} tasks
 */
export function renderTasks(tasks) { ... }
```

### Task Management

```js
/**
 * Adds a new task, saves, and re-renders.
 * @param {Task} newTask
 */
function addNewTask(newTask) { ... }
```

### Initialization

```js
/**
 * Initializes the app: loads tasks, sets up modal, renders UI.
 */
function init() { ... }

// Start app
init();
```

---

## JSDoc Type Definitions

```js
/**
 * @typedef {Object} Task
 * @property {string} id - Unique task identifier.
 * @property {string} title - Task title.
 * @property {string} [description] - Optional task description.
 * @property {"todo"|"doing"|"done"} status - Task status.
 */
```

---

## Usage

1. Open `index.html` in a browser.
2. Use the sidebar to select boards.
3. Click `+ Add New Task` to open modal.
4. Fill out title, description, and status.
5. Task is added, saved to localStorage, and rendered in the correct column.

---

**Notes:**
- Responsive for tablet and mobile.
- Modals are centered with backdrop.
- Tasks persist between page reloads via localStorage.
- Hover tooltips can be added for validation alerts.

