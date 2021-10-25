import { ProxyState } from "../AppState.js";
import { getListForm } from "../Forms/ListForm.js";
import { taskListsService } from "../Services/TaskListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    const taskLists = ProxyState.taskLists
    console.log('draw in lists', taskLists)
    let template = ''
    taskLists.forEach(tl => template += tl.Template)
    document.getElementById('taskLists').innerHTML = template
}

export class TaskListsController {
    constructor() {
        ProxyState.on('taskLists', _draw)
        ProxyState.on('taskLists', saveState)
        ProxyState.on('tasks', _draw)
        ProxyState.on('tasks', saveState)
        document.getElementById('modal-body-slot').innerHTML = getListForm()
        loadState()
        _draw()
    }

    createList() {
        window.event.preventDefault()
        const formElem = window.event.target
        console.log(formElem)
        const newList = {
            // @ts-ignore
            listName: formElem.listName.value,
            // @ts-ignore
            color: formElem.color.value
        }

        taskListsService.createList(newList)
        console.log('create List', newList)
        // @ts-ignore
        formElem.reset()
        // @ts-ignore
        bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
    }

    deleteList(id) {
        let dtl = confirm('You are about to delete a task list! Are you sure?')
        if (dtl == true) {
            taskListsService.deleteList(id)
        } else {
            ''
        }
    }
}
console.log('Controller')