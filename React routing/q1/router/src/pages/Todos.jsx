import { useState, useEffect } from 'react';
import '../styles/Todos.css';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        // Get only first 10 todos
        setTodos(data.slice(0, 10));
        setError(null);
      } catch (err) {
        setError(err.message);
        setTodos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <p className="loading">Loading todos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="page-content">
          <p className="error">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="todos-content">
        <h1>Todos</h1>
        <div className="todos-grid">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-card">
              <div className="todo-header">
                <h3>{todo.title}</h3>
              </div>
              <div className="todo-status">
                <span className={`status-badge ${todo.completed ? 'completed' : 'not-completed'}`}>
                  {todo.completed ? 'Completed' : 'Not Completed'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
