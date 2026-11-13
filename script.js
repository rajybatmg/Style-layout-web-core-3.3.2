//HIDE AND SHOW ALL

//For description section
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

//For brands section showall
const brandsButton = document.getElementsByClassName('brands__showall')[0];
const brandsExtra = document.getElementsByClassName('brands__extra');

brandsButton.addEventListener('click', () => {

    for (const brand of brandsExtra) {
        brand.classList.toggle('visible');
    }

    const isVisible = brandsExtra[0].classList.contains('visible');

    if (isVisible) {
        brandsButton.textContent = 'Hide';
    } else {
        brandsButton.textContent = 'Show all';
    }
});


//For devices/equipments showall section
const devicesButton = document.getElementsByClassName('devices__showall')[0];
const devicesExtra = document.getElementsByClassName('devices__extra');

devicesButton.addEventListener('click', () => {

    for (const device of devicesExtra) {
        device.classList.toggle('visible');
    }

    const isVisible = devicesExtra[0].classList.contains('visible');

    if (isVisible) {
        devicesButton.textContent = 'Hide';
    } else {
        devicesButton.textContent = 'Show all';
    }
});


//SWIPER JS 

// SWIPER JS - MOBILE ONLY

const mobileScreen = window.matchMedia('(max-width: 767px)');

let swipers = [];

function setupSwiper() {

    if (mobileScreen.matches) {

        // Initialize Swiper on mobile
        document.querySelectorAll('.swiper').forEach((element) => {

            if (!element.swiper) {
                const swiper = new Swiper(element, {
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    loop: true,
                    speed: 9000,

                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }
                });

                swipers.push(swiper);
            }
        });

    } else {

        // Destroy Swiper on tablet and desktop
        swipers.forEach((swiper) => {
            swiper.destroy(true, true);
        });

        swipers = [];
    }
}

setupSwiper();

mobileScreen.addEventListener('change', setupSwiper);