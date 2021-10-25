import { ProxyState } from "../AppState.js";
import { TaskList } from "../Models/TaskList.js";
import { Task } from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('TaskApp', JSON.stringify({
        tasklists: ProxyState.taskLists,
        tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('TaskApp'))
    console.log('loaded data', data)
    if (data != null) {
        ProxyState.taskLists = data.tasklists.map(tl => new TaskList(tl))
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
}