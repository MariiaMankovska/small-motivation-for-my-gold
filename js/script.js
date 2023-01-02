
const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const slidesCounter = sliderRight.querySelectorAll('div').length;
const dwnBtn = document.querySelector('.dwn-btn');
const upBtn = document.querySelector('.up-btn');

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slidesCounter-1)*100}vh`;


upBtn.addEventListener('click', function () {
    nextSlide('up');
})
dwnBtn.addEventListener('click', function () {
    nextSlide('down');
})

function nextSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        console.log(activeSlideIndex)
        if (activeSlideIndex === slidesCounter) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        console.log(activeSlideIndex)
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCounter - 1
        }
    }

    const height = slider.clientHeight
    console.log(height)

    sliderLeft.style.transform = `translateY(${activeSlideIndex*height}px)`;
    sliderRight.style.transform = `translateY(-${activeSlideIndex*height}px)`;
}




