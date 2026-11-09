
const button = document.querySelector('.myButton');
const extraIntro = document.querySelector('.intro__extra');

button.addEventListener('click', () => {
    extraIntro.classList.toggle('visible');

    const isVisible = extraIntro.classList.contains('visible');

    if (isVisible) {
        button.textContent = 'Show All';
    } else {
        button.textContent = 'Show Less';
    }
});
