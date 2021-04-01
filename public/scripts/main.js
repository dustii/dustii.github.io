
// Fade in/out animation for featured image changes
const featImg = document.querySelector('#featImg');
let imgSources = ['amazon_logo.png', 'etsy_logo.png', 'geodude.jpg'];

window.onload = event => {
    let i = 0;

    setInterval(() => {

        setTimeout(() => {
            featImg.style.opacity = '0';
        }, 4000);

        featImg.src = 'images/' + imgSources[i++ % imgSources.length];
        featImg.style.opacity = '1';

    }, 5000);
};