const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('#controls input');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const div = document.createElement('div');

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        
        fragment.appendChild(div);
    }
    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
createBtn.addEventListener('click', () => {
    const amount = parseInt(amountInput.value, 10);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
        return;
    }

    destroyBoxes();
    createBoxes(amount);
    amountInput.value = '';
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
})