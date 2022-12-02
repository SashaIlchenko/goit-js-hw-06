const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
    const password = formEl.password.value;
    if (mail === "" || password === "") {
        return window.alert("Заповніть усі поля");
    }
    const formData = {
        mail,
        password,
    }
    console.log(formData);
    form.reset();
}