const changeNavAppearance = () => {
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    if (window.pageYOffset > container.offsetTop - 60)
        nav.classList.add('desktop');
    else nav.classList.remove('desktop');


}
document.addEventListener('scroll', changeNavAppearance);