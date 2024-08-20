let navBar = document.getElementById("nav-bar");
function scroll() {
    if (!visible) {
        if (window.scrollY > 1) {
            navBar.setAttribute("style","backdrop-filter: blur(10px);background-color: rgba(135, 0, 230, 0.500);transition:0.5s");
        
        }else{
            navBar.setAttribute("style","background-color: none; transition:0.5s")
        }
    }
}