/**Handles modal ui and interaction */


/**function opens an add task modal */
function openNewTaskModal(){
    document.getElementById('new-task-modal').showModal();
}

function closeTaskModal(){
    document.getElementById('new-task-modal').close();
    document.getElementById('new-task-form').reset();
}

/**Creates event listeners for clicks on add task button and form submit button */
function initializeTasks(){
    const addTaskBtn = document.getElementById('new-task-btn');
    const addTaskBtnM = document.getElementById('new-task-btn-m');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('new-task-form');

    addTaskBtn.addEventListener("click", openNewTaskModal);
    addTaskBtnM.addEventListener("click", openNewTaskModal)
    closeModalBtn.addEventListener("click", closeTaskModal);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById('new-task-input').value;
        const desc = document.getElementById('new-task-desc').value;
        const status = document.getElementById('new-task-status').value;
    })
}