let formulario= document.getElementById("formulario")

let fecha= document.getElementById("fecha")

let boton_enviar= document.getElementById('boton_enviar')
let volver=document.getElementById('volver')

// let nombre=document.getElementById("nombre")

formulario.addEventListener('submit',function(sub){
    sub.preventDefault();
    let hay_error=false
    if(nombre_input.value==""){
        document.getElementById('error_nombre').innerHTML="Ingresa tu nombre"
        hay_error=true

    }
    else{
        document.getElementById('error_nombre').innerHTML=""
    }
    if(apellido.value==""){
        document.getElementById('error_apellido').innerHTML="Ingresa tu apellido"
        hay_error=true

    }
    else{
        document.getElementById('error_apellido').innerHTML=""
    }
    if(100000000>dni.value>0){
         document.getElementById('error_dni').innerHTML=""
    }
    else{
        document.getElementById('error_dni').innerHTML="Ingresa DNI valido"
        hay_error=true

    }
    if(email.value==confirmar_email.value){
        document.getElementById('confirmacion_email').innerHTML=""


    }
    else{
        document.getElementById('confirmacion_email').innerHTML="El email debe ser igual al campo superior"
        hay_error=true
    }
    if(!hay_error){ 
        document.getElementById('valido').innerHTML="Datos enviados"
       volverPagina()

    }
})


function volverPagina(){
    boton_enviar.style.display='none'
    volver.style.display='inline'
}