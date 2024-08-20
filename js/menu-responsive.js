let menu = document.getElementById("menu");
let botonMenu = document.getElementById("anvorguesa");
let raya1 =document.getElementById("linea1");
let raya2 =document.getElementById("linea2");
let raya3 =document.getElementById("linea3");
let home = document.getElementById("home");      
let visible = false;

botonMenu.addEventListener("click", function desplegar() {
  if (!visible) {
    navBar.setAttribute("style","background-color: none; transition:0.2s")
    menu.classList.add("showMenu")
    raya1.classList.add("desplazamiento1")
    raya2.classList.add("desaparecer")
    raya3.classList.add("desplazamiento2")
    visible = true        
  }
  else{
    navBar.setAttribute("style","backdrop-filter: blur(10px);background-color: rgba(135, 0, 230, 0.500);transition:0.2s");
    menu.classList.remove("showMenu")
    raya1.classList.remove("desplazamiento1")
    raya2.classList.remove("desaparecer")
    raya3.classList.remove("desplazamiento2")
    visible = false
  }
})
