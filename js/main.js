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
}
menu();