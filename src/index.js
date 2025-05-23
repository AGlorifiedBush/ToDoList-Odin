import { toDoBuild } from "./toDoBuilder";
import { fillPage } from "./fillPage";
import { fromBuilder } from "./toDoForm";

document.getElementById("addProjectBtn").addEventListener("click", formBuilder());
fillPage();