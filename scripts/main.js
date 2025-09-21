import { initialTasks } from "./initialData.js";
import {initializeModal} from "./modal.js";
import {renderTasks} from "./render.js";
import {getTasks, saveTasks} from "./local-storage.js";

/**initialize the application */
/**function initializes application */
    let tasks = [];

/**
 * Adds a new task to the task list, persists it in localStorage,
 * and re-renders the task board UI.
 *
 * @function addNewTask
 * @param {Object} newTask - The task object to add.
 * @param {string} newTask.title - The title of the task.
 * @param {string} [newTask.description] - Optional description of the task.
 * @param {"todo"|"doing"|"done"} newTask.status - The current status of the task.
 */
function addNewTask(newTask) {
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
}


/**
 * Initializes the application state and UI.
 *
 * - Loads tasks from localStorage (via getTasks).
 * - If no tasks are stored, loads from `initialTasks` and saves them.
 * - Sets up the modal event listeners for adding new tasks.
 * - Renders the tasks onto the board.
 *
 * @function init
 */
function init() {
  const storedTasks = getTasks();
  if (storedTasks.length === 0) {
    tasks = initialTasks;
    saveTasks(tasks);
  } else {
    tasks = storedTasks;
  }

  initializeModal(addNewTask);
  renderTasks(tasks);
}

// Start the application
init();