import { toDoBuild } from "./toDoBuilder";
import { fillPage } from "./fillPage";
import { formBuilder } from "./toDoForm";
import { addToPage } from "./addToPage";

fillPage();

document.getElementById("addProjectBtn").addEventListener("click", () => {
    formBuilder();
    
    document.getElementById("toDoForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const toDo = toDoBuild();

        addToPage(toDo);
    });
});