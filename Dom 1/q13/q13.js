document.addEventListener('DOMContentLoaded', () => {
  const colorInput = document.getElementById('color-input');
  const changeBgBtn = document.getElementById('change-bg');
  const textInput = document.getElementById('text-input');
  const updateTextBtn = document.getElementById('update-text');
  const target = document.getElementById('target');

  const isValidColor = (value) => {
    const s = new Option().style;
    s.backgroundColor = value;
    return s.backgroundColor !== '';
  };

  changeBgBtn.addEventListener('click', () => {
    const color = (colorInput.value || '').trim();
    if (!color) {
      alert('Please enter a color name!');
      return;
    }

    if (!isValidColor(color)) {
      alert('Invalid color name!');
      return;
    }

    target.style.backgroundColor = color;
  });

  updateTextBtn.addEventListener('click', () => {
    const text = (textInput.value || '').trim();
    if (!text) {
      alert('Please enter some text!');
      return;
    }

    target.textContent = text;
  });
});
