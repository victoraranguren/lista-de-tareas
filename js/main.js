//Selectores
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const listGroup = document.querySelector('.list-group');

//Modelo
const tareas = [
    {
        text: "Elemento 1"
    },
    {
        text: "Elemento 2"
    },
    {
        text: "Elemento 3"
    },
]

tareas.forEach(tarea=>{
    let el = document.createElement('li');
    el.innerText = tarea.text;
    el.className = 'list-group-item';
    listGroup.appendChild(el)
    console.log(el);
})


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