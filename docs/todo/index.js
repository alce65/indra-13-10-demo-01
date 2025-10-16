    document.getElementById('add-task').addEventListener('click', function() {
      const taskInput = document.getElementById('new-task');
      const taskText = taskInput.value.trim();
      if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        document.getElementById('todo-list').appendChild(li);
        taskInput.value = '';
      }
    });
