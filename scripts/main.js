import { initialTasks } from "./initialData.js";

const tasksToString = JSON.stringify(initialTasks);
localStorage.setItem('tasks', tasksToString);
console.log({...localStorage});