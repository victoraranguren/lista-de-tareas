//Variables
const form = document.querySelector('#form');
const input = document.querySelector('#input');

//Funciones
const revision=(e)=>{
    e.preventDefault();
    let respuesta;
    if(input.value != ""){
       respuesta = true;
    }else {
        respuesta = false;
    }
    console.log(respuesta);
}

//Listeners
form.addEventListener('submit',revision);