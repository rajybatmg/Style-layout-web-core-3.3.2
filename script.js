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

//SWIPER 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// SWIPER - MOBILE ONLY
const mobileScreen = window.matchMedia('(max-width: 767px)');

let brandsSwiper = null;
let devicesSwiper = null;
let pricesSwiper = null;

function updateSliders() {
    if (mobileScreen.matches) {

        if (!brandsSwiper) {
            brandsSwiper = new Swiper('.brands__slider', {
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 16,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                loop: false
            });
        }

        if (!devicesSwiper) {
            devicesSwiper = new Swiper('.devices__slider', {
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 16,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                loop: false
            });
        }

        if (!pricesSwiper) {
            pricesSwiper = new Swiper('.prices__slider', {
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 16,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                loop: false
            });
        }

    } else {

        if (brandsSwiper) {
            brandsSwiper.destroy(true, true);
            brandsSwiper = null;
        }

        if (devicesSwiper) {
            devicesSwiper.destroy(true, true);
            devicesSwiper = null;
        }

        if (pricesSwiper) {
            pricesSwiper.destroy(true, true);
            pricesSwiper = null;
        }
    }
}

updateSliders();

mobileScreen.addEventListener('change', updateSliders);