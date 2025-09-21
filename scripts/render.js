/**Rendering the UI */

const toDoCol = document.querySelector(`.column-div[data-status = "todo"] .tasks-container`);
const doingCol = document.querySelector(`.column-div[data-status = "doing"] .tasks-container`);
const doneCol = document.querySelector(`.column-div[data-status = "done"] .tasks-container`);

/**creates a task card div and returns the card element*/
export function createTaskCard(task){
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-div');
    taskCard.id = task.id;
    taskCard.innerHTML = `${task.title}`;

    return taskCard
}
/**places cards in the appropriate column */
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