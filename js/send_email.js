import apiKeys from './apikeys.js'


const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('anna', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then((result) => {
            console.log(result.text)
        },
        (error) => {
            console.log(error.text)
        })
}

const contactForm = document.querySelector('.container__contact-form');
contactForm.addEventListener('submit', sendEmail);