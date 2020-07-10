let intro = document.getElementById("intro");
let copy = document.getElementById("copy");
let moving = false;

function scroll() {
    if (window.pageYOffset > 10) {
        intro.classList.add("move-titulo")
    copy.classList.add("move")   
    } else {
        intro.classList.remove("move-titulo")
        copy.classList.remove("move") 
    }
}