/**Rendering the UI */

const toDoCol = document.querySelector(`.column-div[data-status = "todo"] .tasks-container`);
const doingCol = document.querySelector(`.column-div[data-status = "doing"] .tasks-container`);
const doneCol = document.querySelector(`.column-div[data-status = "done"] .tasks-container`);
let count = 0;

/**
 * creates a task card div and returns the  created card element
 *
 * @function createTaskCard
 * @param {Object} task - The task object containing data to display.
 * @param {string} task.title - The title of the task (displayed as card content).
 * @returns {HTMLDivElement} The created task card element.
 */
export function createTaskCard(task){
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-div');
    count += 7;
    taskCard.id = `${count}`;
    taskCard.innerHTML = `${task.title}`;

    return taskCard
}


/**places cards in the appropriate column based on status
 *
 * Clears existing content in the "To Do", "Doing", and "Done" columns,
 * then creates and appends task cards for each task in the given list.
 *
 * @function renderTasks
 * @param {Object[]} tasks - An array of task objects to render.
 * @param {string} tasks[].title - The title of the task.
 * @param {"todo"|"doing"|"done"} tasks[].status - The current status of the task,
 *        which determines the column where the task card is placed.
 *
 */
export function renderTasks(tasks){
    const card = createTaskCard(task);
    /**clear all tasks */
        toDoCol.innerHTML = "";
        doingCol.innerHTML = "";
        doneCol.innerHTML = "";

    /**render all tasks */
    tasks.forEach(task => {
        const card = createTaskCard(task);
        if(task.status === "todo"){
            toDoCol.appendChild(card);
        }else if(task.status === "doing"){
            doingCol.appendChild(card);
        }else if(task.status === "done"){
            doneCol.appendChild(card);
        }
    });
}