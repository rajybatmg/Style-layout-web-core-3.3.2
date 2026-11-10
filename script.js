//For readmore and hide section 
const button = document.querySelector('.myButton');
const extraIntro = document.querySelector('.intro__extra');

button.addEventListener('click', () => {
    extraIntro.classList.toggle('visible');

    const isVisible = extraIntro.classList.contains('visible');

    if (isVisible) {
        button.textContent = 'Hide';
    } else {
        button.textContent = 'Read More';
    }
});
