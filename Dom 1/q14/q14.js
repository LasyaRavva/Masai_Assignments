// Fixed issues are documented inline as comments.

document.addEventListener('DOMContentLoaded', () => {
  // Fixed bug: selector used '#message' instead of incorrect '#massage'
  const para = document.querySelector('#message'); // Fixed selector typo

  // Fixed bug: original code used getElementByName (non-existent). Use getElementById.
  const textButton = document.getElementById('textButton'); // Fixed method name

  // Fixed bug: original used addClickEventListener (non-existent). Use addEventListener('click', ...)
  textButton.addEventListener('click', () => { // Fixed event listener method
    // Fixed bug: original used para.contentText (non-existent). Use textContent to change text.
    para.textContent = 'New Message'; // Fixed property name
  });

  const box = document.getElementById('box');
  const colorButton = document.getElementById('colorButton');

  colorButton.addEventListener('click', () => {
    // Fixed bug: original used box.styl (typo). Use box.style.backgroundColor
    box.style.backgroundColor = 'blue'; // Fixed property typo
  });
});
