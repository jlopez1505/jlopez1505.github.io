
 let menu = document.getElementById("menu");
      let botonMenu = document.getElementById("anvorguesa");
      let raya1 =document.getElementById("linea1");
      let raya2 =document.getElementById("linea2");
      let raya3 =document.getElementById("linea3");
      let visible = false;
     botonMenu.addEventListener("click", function desplegar() {
        if (!visible) {
          menu.classList.add("showMenu")
          raya1.classList.add("desplazamiento1")
          raya2.classList.add("desaparecer")
          raya3.classList.add("desplazamiento2") 
          visible = true        
        }
        else{
          menu.classList.remove("showMenu")
          raya1.classList.remove("desplazamiento1")
          raya2.classList.remove("desaparecer")
          raya3.classList.remove("desplazamiento2")
          visible = false
        }
      })