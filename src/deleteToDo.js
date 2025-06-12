export function deleteToDo(toDoList, index, renderCallback) {
    toDoList.splice(index, 1);
    renderCallback(toDoList);
}