const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener('click', OnBtnDecClick);
btnIncrement.addEventListener('click', OnBtnIncClick);

function OnBtnDecClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
function OnBtnIncClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

