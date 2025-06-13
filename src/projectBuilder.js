export function projectBuilder() {
    return project = {
        title: document.getElementById("projectTitle").value,
        dueDate: document.getElementById("dueDate").value,
        toDoList: [],        
    }
}