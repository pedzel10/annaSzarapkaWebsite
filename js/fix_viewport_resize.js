const fixViewportResize = () => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const html = document.querySelector('html');
    const body = document.querySelector('body');

    html.style.width = w;
    body.style.width = w;

    html.style.height = h;
    body.style.height = h;

    console.log('ok');
}
fixViewportResize();