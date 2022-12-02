function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  colorNameLabel: document.querySelector('.color'),
}
refs.button.addEventListener('click', onBtnClick);

function onBtnClick() {

  refs.body.style.backgroundColor = getRandomHexColor(onBtnClick);
  refs.colorNameLabel.textContent = refs.body.style.backgroundColor;

}



