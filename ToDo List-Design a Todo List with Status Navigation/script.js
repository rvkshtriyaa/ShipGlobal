const statuses = ['backlog', 'to-do', 'ongoing', 'done'];
const lists = statuses.map(status => document.getElementById(`${status}-list`));

const todos = [
    'Attend The Meeting', 'Practice DSA', 'Practice React', 'Project Work', 'Task 5',
    'Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10'
];

todos.forEach((todo, index) => {
    const status = statuses[index % statuses.length];
    const list = lists[statuses.indexOf(status)];
    createTaskElement(todo, status, list);
});

function createTaskElement(taskContent, status, list) {
    const li = document.createElement('li');
    li.textContent = taskContent;
    li.dataset.status = status;
    updateTaskButtons(li, status); 

    list.appendChild(li);
}

function moveTask(task, direction) {
    const fromStatus = task.dataset.status;
    const currentIndex = statuses.indexOf(fromStatus);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < statuses.length) {
        const nextStatus = statuses[nextIndex];
        const fromList = document.getElementById(`${fromStatus}-list`);
        const toList = document.getElementById(`${nextStatus}-list`);

   
        fromList.removeChild(task);
        task.dataset.status = nextStatus;
        toList.appendChild(task);

    
        updateTaskButtons(task, nextStatus);
    }
}

function updateTaskButtons(task, status) {
 
    const existingPrevBtn = task.querySelector('button.move-btn[data-direction="-1"]');
    const existingNextBtn = task.querySelector('button.move-btn[data-direction="1"]');
    if (existingPrevBtn) task.removeChild(existingPrevBtn);
    if (existingNextBtn) task.removeChild(existingNextBtn);


    if (status !== 'backlog') {
        const newPrevBtn = document.createElement('button');
        newPrevBtn.textContent = '←';
        newPrevBtn.className = 'move-btn';
        newPrevBtn.dataset.direction = '-1';
        newPrevBtn.onclick = () => moveTask(task, -1);
        task.appendChild(newPrevBtn);
    }

    if (status !== 'done') {
        const newNextBtn = document.createElement('button');
        newNextBtn.textContent = '→';
        newNextBtn.className = 'move-btn';
        newNextBtn.dataset.direction = '1'; 
        newNextBtn.onclick = () => moveTask(task, 1);
        task.appendChild(newNextBtn);
    }
}
