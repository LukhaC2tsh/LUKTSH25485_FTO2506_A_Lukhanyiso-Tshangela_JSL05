/**Local storage interactions */

const TASKS_KEY = "tasks";

export function getTasks(){
    const storedTasks = localStorage.getItem(TASKS_KEY);
    return storedTasks ? JSON.parse(storedTasks): [];
}

export function saveTasks(tasks){
    localStorage.setItem(TASKS_KEY, tasks);
}