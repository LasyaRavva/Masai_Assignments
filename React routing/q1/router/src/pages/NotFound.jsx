import '../styles/pages.css';

function NotFound() {
  return (
    <div className="page-container">
      <div className="page-content error-content">
        <h1>404</h1>
        <p>404 - Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
