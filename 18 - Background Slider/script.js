const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
    activeSlide++;
    console.log(activeSlide, slides.length);
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
        console.log("come here");
    }

    setBgToBody();
    setActiveSlide();
});

leftBtn.addEventListener("click", () => {
    activeSlide--;
    console.log(activeSlide, slides.length);
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
        console.log("come here");
    }

    setBgToBody();
    setActiveSlide();
});

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[activeSlide].classList.add("active");
}
