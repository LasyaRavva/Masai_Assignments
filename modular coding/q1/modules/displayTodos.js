export function displayTodos(data) {
  const container = document.getElementById('todos-root');
  
  if (!container) {
    console.error('Todos container not found');
    return;
  }
  
  container.innerHTML = '';
  
  if (!data || data.length === 0) {
    container.innerHTML = '<p class="empty">No todos found</p>';
    return;
  }
  
  data.forEach(todo => {
    const todoCard = document.createElement('div');
    todoCard.className = `todo-card ${todo.completed ? 'completed' : ''}`;
    
    todoCard.innerHTML = `
      <div class="todo-header">
        <span class="todo-id">#${todo.id}</span>
        <span class="todo-status ${todo.completed ? 'status-complete' : 'status-pending'}">
          ${todo.completed ? '✓ Complete' : '⏳ Pending'}
        </span>
      </div>
      <h3 class="todo-title">${todo.title}</h3>
      <p class="todo-user">User ID: ${todo.userId}</p>
    `;
    
    container.appendChild(todoCard);
  });
}
