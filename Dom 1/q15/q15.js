document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('task-input');
  const addBtn = document.getElementById('add-task');
  const tasks = document.getElementById('tasks');

  const createTaskItem = (text) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn complete';
    completeBtn.type = 'button';
    completeBtn.textContent = 'Complete';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
  };

  const addTask = () => {
    const text = (input.value || '').trim();
    if (!text) {
      alert('Please enter a task before adding.');
      return;
    }

    const li = createTaskItem(text);
    tasks.appendChild(li);
    input.value = '';
    input.focus();
  };

  addBtn.addEventListener('click', addTask);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });

  tasks.addEventListener('click', (e) => {
    const target = e.target;
    const li = target.closest('li');
    if (!li) return;

    if (target.classList.contains('delete')) {
      li.remove();
      return;
    }

    if (target.classList.contains('complete')) {
      const textSpan = li.querySelector('.task-text');
      textSpan.classList.toggle('completed');
      return;
    }
  });
});
