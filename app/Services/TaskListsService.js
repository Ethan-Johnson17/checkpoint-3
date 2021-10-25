import { ProxyState } from "../AppState.js";
import { TaskList } from "../Models/TaskList.js";

class TaskListsService {
    constructor() {
        console.log('Service loaded')
    }

    createList(listData) {
        const taskList = new TaskList(listData)
        ProxyState.taskLists = [taskList, ...ProxyState.taskLists]
    }
    deleteList(id) {
        ProxyState.taskLists = ProxyState.taskLists.filter(tl => tl.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)


    }
}

export const taskListsService = new TaskListsService()