//Variables
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const listGroup = document.querySelector('.list-group');

//Funciones
const revision = (e) => {
    e.preventDefault();
    const tarea = input.value;
    let respuesta;
    if (tarea != undefined) {
        respuesta = true;
        crearTarea(tarea);
    } else {
        respuesta = false;
    }
    console.log(respuesta);
}

const crearTarea = (tarea) => {
    const el = document.createElement('li');
    el.className = "list-group-item";
    el.innerText = tarea;
    listGroup.appendChild(el);
}

//Listeners
form.addEventListener('submit', revision);