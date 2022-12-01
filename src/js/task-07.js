const inputEl = document.querySelector('#font-size-control');
const labelTextEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    const valueEl = event.currentTarget.value;
    labelTextEl.style.fontSize = `${valueEl}px`;

};

