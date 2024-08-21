function openMenu(){
    document.body.classList.add('menu-open');
}
function closeMenu(){
    document.body.classList.remove('menu-open');

}
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(n) {
    if (n >= totalSlides) index = 0;
    else if (n < 0) index = totalSlides - 1;
    else index = n;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

setInterval(() => {
    showSlide(index + 1);
}, 5000);