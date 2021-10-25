export function getListForm() {
  return `
    <form onsubmit="app.taskListsController.createList()">
            <div class="mb-3 d-flex justify-content-between">
              <div>
                <label for="listName" class="form-label" >List Name</label>
                <input type="text" minlength="3" maxlength="15" class="form-control" name="listName" id="listName" aria-describedby="listName"
                  placeholder="List Name..." required>
              </div>
              <div>
                <label for="color" class="form-label">List Color</label>
                <input type="color" class="form-control" value="#ff0000" name="color" id="color" aria-describedby="color"
                  placeholder="List Name..." required>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" >Create</button>
              </div>
            </div>
          </form>
    `
}