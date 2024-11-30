document.addEventListener("DOMContentLoaded", () => {
    const toDoList = document.getElementById('to-do-list');
    const inProgressList = document.getElementById('in-progress-list');
    const doneList = document.getElementById('done-list');

    const addToDoTaskButton = document.getElementById('add-to-do-task');
    const toDoInput = document.getElementById('to-do-input');

    const createTaskElement = (taskName) => {
        const listItem = document.createElement('li');
        listItem.textContent = taskName;

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        taskActions.appendChild(deleteButton);
        listItem.appendChild(taskActions);

        return listItem;
    };

    addToDoTaskButton.addEventListener('click', () => {
        const taskName = toDoInput.value.trim();
        if (taskName) {
            const taskElement = createTaskElement(taskName);
            toDoList.appendChild(taskElement);
            toDoInput.value = '';
        } else {
            alert('Please enter a valid task name.');
        }
    });

    // Make columns sortable
    new Sortable(toDoList, {
        group: 'tasks',
        animation: 150
    });
    new Sortable(inProgressList, {
        group: 'tasks',
        animation: 150
    });
    new Sortable(doneList, {
        group: 'tasks',
        animation: 150
    });
});
