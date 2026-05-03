const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
    const trimmedValue = event.target.value.trim();
    nameOutput.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});
