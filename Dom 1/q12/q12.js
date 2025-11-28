document.addEventListener('DOMContentLoaded', () => {
	const ul = document.querySelector('#item-list');
	const btn = document.querySelector('#add-item');

	const styleListItems = () => {
		const items = ul.querySelectorAll('li');
		items.forEach((li, idx) => {
			const pos = idx + 1; 
			if (pos % 2 === 1) {
				li.style.fontWeight = 'bold';
				li.style.color = 'blue';
				li.style.fontStyle = 'normal';
			} else {
				li.style.fontStyle = 'italic';
				li.style.color = 'red';
				li.style.fontWeight = 'normal';
			}
		});
	};

	styleListItems();

	btn.addEventListener('click', () => {
		const li = document.createElement('li');
		li.textContent = 'New Item';
		ul.appendChild(li);
		styleListItems();
	});
});

