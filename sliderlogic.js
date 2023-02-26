
/*var body = document.body
var slides = document.querySelectorAll('.slider');
var leftBtn = document.getElementById('left').values;
var rightBtn = document.getElementById('right').values;

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgtoBody()
    setActiveSlides()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setBgtoBody()
    setActiveSlides()
})

setBgtoBody()

function setBgtoBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlides(){
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}*/

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0];

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitioned', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
