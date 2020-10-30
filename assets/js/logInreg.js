document.getElementById("btn__registro").addEventListener("click", register);
document.getElementById("btn__inicio").addEventListener("click", logIn);
window.addEventListener("resize",anchoPagina);

var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
var formulario_login = document.querySelector(".form_login");
var formulario_registro = document.querySelector(".form_registro");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registro = document.querySelector(".caja__trasera-registro");


function anchoPagina() {
    if(window.innerWidth > 650){
        caja_trasera_login.style.display ="block";
        caja_trasera_registro.style.display ="block";
    }
    else{
        caja_trasera_registro.style.display="block";
        caja_trasera_registro.opacity ="1";
        caja_trasera_login.style.display ="none";
        formulario_login.style.display="block";
        formulario_registro.style.display ="none";
        contenedor_login_registro.style.left="0px";
    }
    
}
 anchoPagina();

function logIn() {
    
    if(window.innerWidth > 650){
        formulario_registro.style.display = "none";
    contenedor_login_registro.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";    
    }else{
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
    }


}

function register() {
 
    if(window.innerWidth > 850)
    {
        console.log("presionado");
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.display = "none";
        caja_trasera_login.style.opacity = "1";
    }
 
}