let intro = document.getElementById("titulo");
let copy = document.getElementById("copy");
let servicios = document.getElementById("services");
let nav = document.getElementsByClassName("nav-bar");
let home = document.getElementById("home")
let moving = false;

function scroll() {
    let posicionHome = copy.getBoundingClientRect().top
    let posicionServicios = servicios.getBoundingClientRect().top
    console.log(posicionHome)
    
//cambiar los style por clases para agregar animacion
    if (window.scrollY > 1) {
        intro.classList.add("move-titulo")
        copy.classList.add("move")
        if(posicionServicios < 50){
            console.log(posicionServicios)
            home.classList.add("relativo")
            nav[0].style.position = "absolute"
            servicios.style.marginTop = "50%"
        } 
        else {
            home.classList.remove("relativo")
            nav[0].style.position = "fixed"
            servicios.style.marginTop = "50%"
        } 
    } 
        else {
        intro.classList.remove("move-titulo")
        copy.classList.remove("move") 
    } 
}

