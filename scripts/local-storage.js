/**Local storage interactions */

const TASKS_KEY = "tasks";

 /* @function getTasks
 * @returns {Array<Object>} An array of task objects.
 * Returns an empty array if no tasks are found or if parsing fails.
 */
export function getTasks() {
    const storedTasks = localStorage.getItem(TASKS_KEY);
    if (!storedTasks) return [];
    try {
        return JSON.parse(storedTasks);
    } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        return [];
    }
}
/**
 * Saves the given list of tasks to localStorage.
 * @function saveTasks
 * @param {Array<Object>} tasks - An array of task objects to persist.
 * @returns {void}
 */
export function saveTasks(tasks) {
    try {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
}