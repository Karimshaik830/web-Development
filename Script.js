function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskCategory = document.getElementById('taskCategory');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();
    const taskDueDate = taskDate.value;
    const taskCategoryValue = taskCategory.value;

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskValue;

    const taskDetails = document.createElement('span');
    taskDetails.classList.add('task-category');
    taskDetails.textContent = `${taskCategoryValue} - Due: ${taskDueDate || 'No due date'}`;

    taskInfo.appendChild(taskContent);
    taskInfo.appendChild(taskDetails);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(taskInfo);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskDate.value = '';
}

