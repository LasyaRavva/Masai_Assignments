export function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  
  const isLoggedIn = localStorage.getItem('currentUser');
  
  navbar.innerHTML = `
    <div class="nav-container">
      <div class="nav-brand">
        <a href="index.html">📚 Modular App</a>
      </div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        ${isLoggedIn ? `
          <li><a href="todos.html">Todos</a></li>
          <li><a href="#" id="logout-btn">Logout</a></li>
        ` : `
          <li><a href="signup.html">Signup</a></li>
          <li><a href="login.html">Login</a></li>
        `}
      </ul>
    </div>
  `;
  
  if (isLoggedIn) {
    setTimeout(() => {
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('currentUser');
          window.location.href = 'index.html';
        });
      }
    }, 0);
  }
  
  return navbar;
}
