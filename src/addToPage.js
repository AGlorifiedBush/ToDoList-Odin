import { deleteToDo } from "./deleteToDo";
import { sortToDos } from "./sortToDo";

export function addToPage(toDoList) {
    const sortedList = sortToDos(toDoList);

    const projectSection = document.getElementById("projectSection");
    projectSection.innerHTML = "";
    for (let i = 0; i < sortedList.length; i++) {
        const toDo = sortedList[i];
        let newToDo = document.createElement("div");
        newToDo.className = "project";
        newToDo.innerHTML = `
            <button type="button" class="deleteBtn" data-index="${toDoList.indexOf(toDo)}">X</button>
            <ul>
                <li>Title: ${toDo.title}</li>
                <li>Description: ${toDo.description}</li>
                <li>Due Date: ${toDo.dueDate}</li>
                <li>Priority: ${toDo.priority}</li>
                <li>Notes: ${toDo.notes}</li>
            </ul>
        `;
        projectSection.appendChild(newToDo);
    }

    projectSection.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            deleteToDo(toDoList, index, addToPage);
        });
    });
}