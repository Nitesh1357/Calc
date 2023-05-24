let screen = document.querySelector('.screen');

function clearScreen() {
	screen.value = '';
}

function backspace() {
	screen.value = screen.value.slice(0, -1);
}

function insert(value) {
	screen.value += value;
}

function calculate() {
	try {
		screen.value = eval(screen.value);
	} catch (error) {
		screen.value = 'Error';
	}
}
