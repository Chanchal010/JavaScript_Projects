const right = document.querySelector(".right")
const left = document.querySelector(".left")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")

let slideNumber = 1;
const length = images.length;
const getNextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber* 800}px)`
    slideNumber++;
}
const getprevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber - 2)* 800}px)`
    slideNumber--;
}
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`
    slideNumber = 1;
}
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`
    slideNumber = length;
}

right.addEventListener("click", ()=>{
    slideNumber < length ?  getNextSlide() :  getFirstSlide()  ;
})

left.addEventListener("click", ()=>{
    slideNumber > 1 ?  getprevSlide() :  getLastSlide()  ;
})



