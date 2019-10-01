const nameTitle = document.querySelector(".title__name--left"),
    secondNameTitle = document.querySelector(".title__name--right");
const arrowLeft = document.querySelector(".slider-switch__arrow--left"),
    arrowRight = document.querySelector(".slider-switch__arrow--right");
const inputCheck = document.querySelectorAll("[name='togle']");


window.addEventListener("scroll", () => {
    nameTitle.style.transform = `translateX(-${(window.pageYOffset * 0.2) + 150}px)`;
    secondNameTitle.style.transform = `translateX(${(window.pageYOffset * 0.2) + 272}px)`;
});

let activeInput = 0;
arrowRight.addEventListener("click", () => {
    activeInput >= 2 ? activeInput = 0 : activeInput++;
    inputCheck[activeInput].checked = true;
})

arrowLeft.addEventListener("click", () => {
    activeInput <= 0 ? activeInput = 2 : activeInput--;
    inputCheck[activeInput].checked = true;
})

function autoSlider() {
    setInterval(() => {
        activeInput >= 2 ? activeInput = 0 : activeInput++;
        inputCheck[activeInput].checked = true;
    }, 5000)
};
autoSlider();

