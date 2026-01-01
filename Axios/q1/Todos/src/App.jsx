import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
