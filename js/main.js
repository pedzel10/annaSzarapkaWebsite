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
    const publications = document.querySelector('.nav__list-item-publications');

    const showOptions = () => {
        const publicationsSection = document.querySelector('.nav__list-publications-section');
        const gallery = document.querySelector('.nav__list-gallery');
        const contact = document.querySelector('.nav__list-contact');
        const divHide = document.querySelector('.hide');

        publicationsSection.classList.toggle('on');
        gallery.classList.toggle('on');
        contact.classList.toggle('on');
        divHide.classList.toggle('on');


    }
    publications.addEventListener('click', showOptions);

    const changeNavAppearance = () => {
        const container = document.querySelector('.container');

        if (window.pageYOffset > container.offsetTop - 70)
            nav.classList.add('desktop');
        else nav.classList.remove('desktop');


    }
    document.addEventListener('scroll', changeNavAppearance);
}
menu();

// const responsiveParralax = () => {
//     const name = document.querySelector('.name');

//     const matchParallaxSpeed = () => {
//         if (window.outerHeight > window.outerWidth) {
//             if (window.outerHeight <= 700) name.dataset.rellaxSpeed = '-4';
//             if (window.outerHeight > 700) name.dataset.rellaxSpeed = '-5';
//             if (window.outerHeight > 1000) name.dataset.rellaxSpeed = '-7';
//             if (window.outerHeight > 1300) name.dataset.rellaxSpeed = '-10';

//         } else {
//             if (window.outerHeight <= 700) name.dataset.rellaxSpeed = '-4';
//             if (window.outerHeight > 700) name.dataset.rellaxSpeed = '-5';
//             if (window.outerHeight > 1000) name.dataset.rellaxSpeed = '-10';
//             if (window.outerHeight > 1300) name.dataset.rellaxSpeed = '-10';
//         }
//         console.log(name.dataset.rellaxSpeed);
//     }
//     matchParallaxSpeed();
//     //window.addEventListener('resize', matchParallaxSpeed)
// }
// responsiveParralax();