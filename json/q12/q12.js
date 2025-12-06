document.addEventListener('DOMContentLoaded', () => {
	const addBtn = document.getElementById('addBtn');
	const removeBtn = document.getElementById('removeBtn');
	const container = document.getElementById('paragraphContainer');

	addBtn.addEventListener('click', () => {
		const newParagraph = document.createElement('p'); 
		newParagraph.textContent = 'This is a new paragraph.';
		container.appendChild(newParagraph); 
	});

	removeBtn.addEventListener('click', () => {
		const lastPara = container.lastElementChild; 
		if (lastPara) {
			container.removeChild(lastPara); 
		}
	});
});
