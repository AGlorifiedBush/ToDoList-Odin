import { toDoBuild } from "./toDoBuilder";
import { formBuilder } from "./toDoForm";
import { addToPage } from "./addToPage";
import { projectForm } from "./newProjectForm";
import { projectBuilder } from "./projectBuilder";

const projectList = [];

document.getElementById("newProject").addEventListener("click", () => {
    
    projectForm();
    
    document.getElementById("submitProject").addEventListener("submit", function(e) {
        
            e.preventDefault();

            let project = projectBuilder();

            projectList.push(project);


    
        document.getElementById("newToDo").addEventListener("click", () => {
    
            formBuilder();
    
            document.getElementById("toDoForm").addEventListener("submit", function(e) {
        
                e.preventDefault();
        
                let toDo = toDoBuild();

                toDoList.push(toDo);

                addToPage(toDoList);

                return document.getElementById("form").innerHTML = ``;
            });
        });
    });
});