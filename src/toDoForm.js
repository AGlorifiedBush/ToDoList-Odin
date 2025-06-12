export function formBuilder() {
    document.getElementById("form").innerHTML = `
    <form id="toDoForm">
        <label for="title">Title:</label>
        <input type="text" maxlength=20 minlength=5 id="title" name="title" required><br>

        <label for="description">Description:</label>
        <textarea id="description" maxlength=150 minlength=10 name="description" required></textarea><br>

        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate"><br>

        <label for="priority">Priority (1-10):</label>
        <input type="number" id="priority" name="priority" min="1" max="10"><br>

        <label for="notes">Notes:</label>
        <textarea id="notes" maxlength=150 name="notes"></textarea><br>

        <button type="submit" id="submitToDo">Submit New Project</button>
    </form>`;
}