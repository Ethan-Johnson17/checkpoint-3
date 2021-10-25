import { TaskListsController } from "./Controllers/TaskListsController.js"
import { TasksController } from "./Controllers/TasksController.js"

// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  taskListsController = new TaskListsController()
  tasksController = new TasksController()
}

window["app"] = new App();
