export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  footer.innerHTML = `
    <div class="footer-container">
      <p>&copy; ${new Date().getFullYear()} Modular App. All rights reserved.</p>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
      </div>
    </div>
  `;
  
  return footer;
}
