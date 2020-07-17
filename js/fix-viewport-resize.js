// const fixViewportResize = () => {
//     let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//     let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//     const html = document.querySelector('html');
//     const body = document.querySelector('body');

//     html.style.width = w;
//     body.style.width = w;

//     html.style.height = h;
//     body.style.height = h;

//     console.log('ok');
// }
// fixViewportResize();

const fixViewportResize = () => {

    if (window.innerWidth >= 1500) return;

    const containerContact = document.querySelector('.container__contact');
    const inputName = document.querySelector('.contact-form__name .container__contact-form-input');
    const inputEmail = document.querySelector('.contact-form__email .container__contact-form-input');
    const textareaMessage = document.querySelector('.contact-form__message-input');

    const addInputClass = () => {
        containerContact.classList.add('input');
    }
    const removeInputClass = () => {
        containerContact.classList.remove('input');
    }
    inputName.addEventListener('focus', addInputClass);
    inputEmail.addEventListener('focus', addInputClass);
    textareaMessage.addEventListener('focus', addInputClass);

    inputName.addEventListener('blur', removeInputClass);
    inputEmail.addEventListener('blur', removeInputClass);
    textareaMessage.addEventListener('blur', removeInputClass);
}
fixViewportResize();