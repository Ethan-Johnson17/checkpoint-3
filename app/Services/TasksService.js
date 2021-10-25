import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

let completed = 0


class TaskService {
    completedTask(id) {
        let element = document.getElementById('strike');
        element.classList.toggle("text-decoration-line-through");
        completed++
        document.getElementById("complete").innerText = completed.toString()



    }
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)

    }
    createTask(taskData) {
        console.log('Task data in service', taskData)

        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }


}

export const taskService = new TaskService()