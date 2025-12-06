document.addEventListener('DOMContentLoaded', () => {
	const STORAGE_KEY = 'enhanced-todos';

	const taskInput = document.getElementById('task-input');
	const addBtn = document.getElementById('add-btn');
	const searchInput = document.getElementById('search');
	const list = document.getElementById('tasks');
	const emptyMsg = document.getElementById('empty');

	let tasks = loadTasks();
	let searchTerm = '';

	function loadTasks() {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) : [];
		} catch (e) {
			console.error('Failed to load tasks', e);
			return [];
		}
	}

	function saveTasks() {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
		} catch (e) {
			console.error('Failed to save tasks', e);
		}
	}

	function createTask(text) {
		return { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(), text, completed: false };
	}

	function render() {
		list.innerHTML = '';
		const filtered = tasks.filter(t => t.text.toLowerCase().includes(searchTerm));

		if (filtered.length === 0) {
			emptyMsg.hidden = false;
			return;
		}

		emptyMsg.hidden = true;
		filtered.forEach(task => {
			const li = document.createElement('li');
			if (task.completed) li.classList.add('completed');

			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.checked = task.completed;
			checkbox.addEventListener('change', () => {
				task.completed = checkbox.checked;
				saveTasks();
				render();
			});

			const span = document.createElement('span');
			span.className = 'text';
			span.textContent = task.text;

			const delBtn = document.createElement('button');
			delBtn.className = 'delete';
			delBtn.textContent = 'Delete';
			delBtn.addEventListener('click', () => {
				tasks = tasks.filter(t => t.id !== task.id);
				saveTasks();
				render();
			});

			li.appendChild(checkbox);
			li.appendChild(span);
			li.appendChild(delBtn);
			list.appendChild(li);
		});
	}

	function addTask() {
		const text = (taskInput.value || '').trim();
		if (!text) {
			alert('Please enter a task');
			return;
		}
		tasks.push(createTask(text));
		saveTasks();
		taskInput.value = '';
		render();
	}

	addBtn.addEventListener('click', addTask);
	taskInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') addTask();
	});

	searchInput.addEventListener('input', (e) => {
		searchTerm = (e.target.value || '').toLowerCase();
		render();
	});

	render();
});
