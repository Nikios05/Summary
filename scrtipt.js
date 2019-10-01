let nameTitle = document.querySelector(".title__name--left"),
    secondNameTitle = document.querySelector(".title__name--right");


window.addEventListener("scroll", () => {
    nameTitle.style.transform = `translateX(-${(window.pageYOffset * 0.2) + 150}px)`;
    secondNameTitle.style.transform = `translateX(${(window.pageYOffset * 0.2) + 272}px)`
})