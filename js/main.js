const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const showNav = () => {
    nav.classList.toggle('on');
}
hamburger.addEventListener('click', showNav);