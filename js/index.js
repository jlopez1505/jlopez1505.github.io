let intro = document.getElementById("titulo");
let copy = document.getElementById("copy");
let servicios = document.getElementById("services");
let nav = document.getElementsByClassName("nav-bar");
let moving = false;

function scroll() {
    let posicionHome = copy.getBoundingClientRect().top
    let posicionServicios = servicios.getBoundingClientRect().top
    console.log(posicionHome)
    
    
    if (window.scrollY > 1) {
        intro.classList.add("move-titulo")
        copy.classList.add("move")
        if(posicionServicios < 200){
            console.log(posicionServicios)
            home.classList.add("relativo")
            nav[0].style.position = "absolute"
        } 
        else {
            home.classList.remove("relativo")
            nav[0].style.position = "fixed" 
        } 
    } 
        else {
        intro.classList.remove("move-titulo")
        copy.classList.remove("move") 
    } 
}

