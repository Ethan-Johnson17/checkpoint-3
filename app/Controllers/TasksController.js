import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TasksService.js";

// function _draw() {
//     const tasks = ProxyState.tasks
//     let template = ''
//     tasks.forEach(t =>)
// }

export class TasksController {
    constructor() {
        console.log('taskscontroller here')
        // ProxyState.on('tasks', _draw)
    }

    createTask(tlId) {
        window.event.preventDefault()
        const form = window.event.target
        let taskData = {
            // @ts-ignore
            description: form.description.value,
            listId: tlId,
        }

        console.log('create task', taskData)
        taskService.createTask(taskData)
    }

    deleteTask(id) {
        console.log('button works')
        let dtl = confirm('You are about to delete a task list! Are you sure?')
        if (dtl == true) {
            taskService.deleteTask(id)
        } else {
            ''
        }
    }

    completedTask(id) {
        console.log('complete button works')
        taskService.completedTask(id)
    }
}