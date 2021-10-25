import { ProxyState } from '../AppState.js'
import { generateId } from '../Utils/generateId.js'

export class TaskList {
  constructor(data) {
    this.id = data.id || generateId()
    this.listName = data.listName
    this.color = data.color
  }

  get Template() {
    return `
        <div class="col-md-3 bg-light shadow rounded p-3 m-5">
          <div class="card ">
          <div class="card-header d-flex justify-content-between" style="background-color:${this.color}">
            <h5 class="d-flex">${this.listName}</h5> <p><span id="complete">0</span>/${ProxyState.tasks.length}</p > <button class="mdi mdi-trash-can" onclick="app.taskListsController.deleteList('${this.id}')"></button>
            </div >
      <div class="card-body">
        <ul class="list-group list-group-flush">

          ${this.getTasks()}
        </ul>
        <form class="row align-items-end" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="col-10">
            <input type="text" required title="3 to 50 characters" pattern=".{3,50}" maxlength="50" class="form-control" name="description" id="" aria-describedby="helpId"
              placeholder="add ToDo" >
          </div>
          <button class="btn btn-dark col-2"><i class="mdi mdi-plus"></i></button>
        </form>
      </div>
          </div >
        </div >
      `
  }

  getTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
    let template = ''
    tasks.forEach(t => {
      template += t.Template
    })
    return template
    console.log('get task works')
  }
}