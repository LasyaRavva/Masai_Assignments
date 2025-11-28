document.addEventListener('DOMContentLoaded', () => {

  const heading = document.getElementById('main-heading');
  heading && (heading.textContent = 'Welcome to the DOM World!');

  const paragraphs = document.getElementsByTagName('p');
  Array.from(paragraphs).forEach(p => p.style.color = 'blue');

  document.querySelector('.container')?.style.setProperty('background-color', 'yellow');
});

