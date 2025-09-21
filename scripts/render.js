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
    if(toDoCol){
        toDoCol.innerHTML = "";
    }
    if(doingCol){
        doingCol.innerHTML = "";
    }
    if(doneCol){
        doneCol.innerHTML = "";
    }

    /**render all tasks */
    if(toDoCol){
        toDoCol.appendChild(card);
    }
    if(doingCol){
        doingCol.appendChild(card);
    }
    if(doneCol){
        doneCol.appendChild(card);
    }
}