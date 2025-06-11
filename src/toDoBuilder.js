const toDoBuild = function () {
    return {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        dueDate: document.getElementById("dueDate").value,
        priority: document.getElementById("priority").value,
        notes: document.getElementById("notes").value,
    };
};

export { toDoBuild };

