import { toDoBuild } from "./toDoBuilder";
import { fillPage } from "./fillPage";
import { formBuilder } from "./toDoForm";
import { addToPage } from "./addToPage";


const toDoList = [];
toDoList.push(fillPage());
addToPage(toDoList);


document.getElementById("addProjectBtn").addEventListener("click", () => {
    
    formBuilder();
    
    document.getElementById("toDoForm").addEventListener("submit", function(e) {
        
        e.preventDefault();
        
        let toDo = toDoBuild();

        toDoList.push(toDo);

        addToPage(toDoList);

        return document.getElementById("form").innerHTML = ``;
    });
});

