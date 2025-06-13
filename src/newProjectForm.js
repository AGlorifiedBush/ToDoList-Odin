export function projectForm() {
    document.getElementById("form").innerHTML = `
        <form id="newProjectForm">
            <label for="projectTitle">Title:</label>
            <input type="text" maxlength=20 minlength=5 id="projectTitle" name="projectTitle" required><br>
            
            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate"><br>
            
            <button type="submit" id="submitToDo">Submit New Project</button>
        </form>`;
}