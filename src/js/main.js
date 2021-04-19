var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var tepaga = document.querySelector(".faqs__wrapp")

burger.addEventListener("click", function() {
    nav.classList.toggle('nav--active');
    burger.classList.toggle("hamburger--active");
});
tepaga.addEventListener('click', function() {
    tepaga.classList.toggle("faqs__wrapp--active")
});

window.addEventListener ("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})