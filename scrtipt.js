const nameTitle = document.querySelector(".title__name--left"),
    secondNameTitle = document.querySelector(".title__name--right");
const arrowLeft = document.querySelector(".slider-switch__arrow--left"),
    arrowRight = document.querySelector(".slider-switch__arrow--right");
const inputCheck = document.querySelectorAll("[name='togle']");
console.log(document.body.clientWidth)

window.addEventListener("scroll", () => {
    let shift = 0; 
    if (document.body.clientWidth < 644 && document.body.clientWidth > 455) {
        shift = 85;
    } else if (document.body.clientWidth < 455) {
        shift = 62;
    } else shift = 120;
    
    nameTitle.style.transform = `translateX(-${(window.pageYOffset * 0.2)}px)`;
    secondNameTitle.style.transform = `translateX(${(window.pageYOffset * 0.2) + shift}px)`;
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


