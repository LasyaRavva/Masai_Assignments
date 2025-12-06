document.addEventListener('DOMContentLoaded', () => {
	const NOTES_KEY = 'user-notes';
	const textarea = document.getElementById('notes');
	const saveBtn = document.getElementById('save');
	const loadBtn = document.getElementById('load');
	const clearBtn = document.getElementById('clear');

	function loadNotes() {
		const saved = localStorage.getItem(NOTES_KEY);
		if (saved !== null) {
			textarea.value = saved;
		}
	}

	function saveNotes() {
		const text = textarea.value.trim();
		if (!text) {
			alert('Please enter some text before saving.');
			return;
		}
		localStorage.setItem(NOTES_KEY, text);
		alert('Notes saved.');
	}

	function clearNotes() {
		localStorage.removeItem(NOTES_KEY);
		textarea.value = '';
		alert('Notes cleared.');
	}

	saveBtn.addEventListener('click', saveNotes);
	loadBtn.addEventListener('click', loadNotes);
	clearBtn.addEventListener('click', clearNotes);

	loadNotes();
});
