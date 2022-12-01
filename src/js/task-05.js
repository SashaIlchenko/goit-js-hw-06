const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value) { console.log(refs.nameLabel.textContent = event.currentTarget.value); }
    else {
        console.log(refs.nameLabel.textContent = 'Anonymous');
    }
}