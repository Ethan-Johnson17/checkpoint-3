import { generateId } from "../Utils/generateId.js";



export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.complete = false
    this.listId = data.listId
  }


  get Template() {
    return `
        <li class="list-group-item"><div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" onclick="app.tasksController.completedTask('${this.id}')" class="btn-check" value="true" id="btncheck1" autocomplete="off" />
                    <label class="btn btn-outline-primary mdi mdi-check me-2" for="btncheck1"></label>
                  </div><span id="strike">${this.description}</span><button class="mdi mdi-trash-can ms-3" onclick="app.tasksController.deleteTask('${this.id}')" ></button>
                  </li>
        `
  }
}
