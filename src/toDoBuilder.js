const toDoBuild = function (title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist; 
    
    return {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
        notes: this.notes,
        checklist: this.checklist
    };
};

export { toDoBuild };

