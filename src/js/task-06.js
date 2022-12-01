const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        return inputEl.style.borderColor = "#4caf50";
    }
    inputEl.style.borderColor = "#f44336";
    console.log(event.currentTarget.value.length, inputEl.getAttribute('data-length'));

}
console.dir(inputEl);

