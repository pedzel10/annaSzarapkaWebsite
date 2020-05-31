const menu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navOff = document.querySelectorAll('.nav-off');
    const firstLine = document.querySelector('.hamburger__line--first');
    const secondLine = document.querySelector('.hamburger__line--second');
    const thirdLine = document.querySelector('.hamburger__line--third');
    const nav = document.querySelector('.nav');

    const navigation = () => {



        const showNav = () => {
            nav.classList.toggle('on');
        }
        const burgerAnimation = () => {


            firstLine.classList.toggle('on');
            secondLine.classList.toggle('on');
            thirdLine.classList.toggle('on');
        }

        showNav();
        burgerAnimation();
    }
    navOff.forEach((item) => {
        item.addEventListener('click', () => {
            firstLine.classList.remove('on');
            secondLine.classList.remove('on');
            thirdLine.classList.remove('on');
            nav.classList.remove('on');
        })
    })
    hamburger.addEventListener('click', navigation);

    // PUBLICATIONS
    const publications = document.querySelector('.nav__list-publications');

    const showOptions = () => {
        const publicationsSection = document.querySelector('.nav__list-publications-section');
        const gallery = document.querySelector('.nav__list-gallery');
        const contact = document.querySelector('.nav__list-contact');

        publicationsSection.classList.toggle('on');
        gallery.classList.toggle('on');
        contact.classList.toggle('on');
    }

    publications.addEventListener('click', showOptions);
}
menu();