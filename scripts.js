const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
    
    form.style.left = "40%"
    form.style.trasnform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}

function esconderform(){

    form.style.left = "-300px"
    form.style.trasnform = "translatex(0)"
    mascara.style.visibility = "hidden"

}