
var body = document.body
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
}
