const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
}
refs.createBtn.addEventListener('click', onAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onAmount() {
  const amount = refs.input.value;
  createBoxes(amount);
}
function createBoxes(amount) {
  let startSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    const size = startSize + i * 10;
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor(createBoxes);
    fragment.appendChild(divEl);
  }
  refs.boxEl.appendChild(fragment);

}

function destroyBoxes() {
  refs.boxEl.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}