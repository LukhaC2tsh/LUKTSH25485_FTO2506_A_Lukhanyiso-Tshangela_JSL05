

/**Handles modal ui and interaction */


/**function opens the "New Task" modal dialog.
 *
 * Uses the <dialog> element with the id "new-task-modal" and
 * calls its `showModal()` method to display it in a modal state.
 *
 * @function openNewTaskModal
 */
function openNewTaskModal(){
    document.getElementById('new-task-modal').showModal();
}
/**
 * Closes the "New Task" modal dialog and resets the form inside it.
 *
 * - Calls the `close()` method on the <dialog> element with the id "new-task-modal".
 * - Resets the form with the id "new-task-form" to clear any user input.
 *
 * @function closeTaskModal
 */
function closeTaskModal(){
    document.getElementById('new-task-modal').close();
    document.getElementById('new-task-form').reset();
}

/**
 * Initializes event listeners for the "New Task" modal and form.
 *
 * - Connects buttons to open and close the modal.
 * - Handles form submission by creating a new task object from user input.
 * - Validates the task title input (adds/removes "invalid" class dynamically).
 * - Calls the parsed `addNewTask` callback with the new task data.
 * - Resets and closes the modal after submission.
 *
 * @function initializeModal
 * @param {Function} addNewTask - A callback function that accepts a task object ({title, description, status})
 */
export function initializeModal(addNewTask){
    const addTaskBtn = document.getElementById('new-task-btn');
    const addTaskBtnM = document.getElementById('new-task-btn-m');
    const closeModalBtn = document.getElementById('close-new-modal-btn');
    const form = document.getElementById('new-task-form');

    addTaskBtn.addEventListener("click", openNewTaskModal);
    addTaskBtnM.addEventListener("click", openNewTaskModal)
    closeModalBtn.addEventListener("click", closeTaskModal);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTask = {
            title:document.getElementById('new-task-input').value,
            description:document.getElementById('new-task-desc').value,
            status:document.getElementById('new-task-status').value,
        }
        const titleInput = document.getElementById("new-task-input");

        titleInput.addEventListener("input", () => {
        if (titleInput.value.trim() === "") {
            titleInput.parentElement.classList.add("invalid");
        } else {
            titleInput.parentElement.classList.remove("invalid");
        }
        });

        addNewTask(newTask);
        closeTaskModal();
    })
    
}