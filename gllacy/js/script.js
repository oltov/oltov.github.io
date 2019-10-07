var link = document.querySelector(".map-feedback-button");
var popup = document.querySelector(".modal-feedback");
var background = document.querySelector(".modal-feedback-background");
var close = document.querySelector(".modal-feedback-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-popup");
    background.classList.add("modal-feedback-background-on");
})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-popup");
    background.classList.remove("modal-feedback-background-on");
})