import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getTodoById } from '../api/todoService';
import './TodoDetails.css';

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await getTodoById(id);
        setTodo(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todo details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading todo details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error">{error}</div>
        <Link to="/" className="back-btn">Back to Todos</Link>
      </div>
    );
  }

  if (!todo) {
    return (
      <div className="error-container">
        <div className="error">Todo not found</div>
        <Link to="/" className="back-btn">Back to Todos</Link>
      </div>
    );
  }

  return (
    <div className="todo-details-container">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Todos
      </button>
      
      <div className="todo-details-card">
        <div className="detail-header">
          <h1>Todo Details</h1>
          <span className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}>
            {todo.completed ? '✓ Completed' : '○ Pending'}
          </span>
        </div>
        
        <div className="detail-content">
          <div className="detail-row">
            <span className="detail-label">ID:</span>
            <span className="detail-value">#{todo.id}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">User ID:</span>
            <span className="detail-value">{todo.userId}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Title:</span>
            <span className="detail-value">{todo.title}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value">
              {todo.completed ? 'Completed' : 'Not Completed'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
