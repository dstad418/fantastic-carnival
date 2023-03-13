
//  Variable Declaration
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect().width;

// Arranging slides in an array
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});



/*      Slide navigator      */