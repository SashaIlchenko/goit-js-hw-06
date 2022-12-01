const counterEl = document.querySelectorAll('#counter');
const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(counterEl, valueEl, btnDecrement);
let counterValue = Number(valueEl.textContent);
console.log(counterValue)
btnDecrement.addEventListener('click', OnBtnDecClick);
btnIncrement.addEventListener('click', OnBtnIncClick);
function OnBtnDecClick(event) {
    console.dir(event);
}

function OnBtnIncClick(event) {
    console.dir(event);
}

