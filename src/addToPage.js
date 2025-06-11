export function addToPage(toDo) {
    const newToDo = document.createElement("div");
    newToDo.className = "project";
    newToDo.innerHTML = `
        <ul>
            <li>Title: ${toDo.title}</li>
            <li>Description: ${toDo.description}</li>
            <li>Due Date: ${toDo.dueDate}</li>
            <li>Priority: ${toDo.priority}</li>
            <li>Notes: ${toDo.notes}</li>
        </ul>
    `;
    document.getElementById("projectSection").appendChild(newToDo);
}