//Selectores
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const listGroup = document.querySelector('.list-group');

//Funciones
const revision = (e) => {
    e.preventDefault();
    let tarea = input.value;
    if (tarea != '') {
        respuesta = true;
        crearTarea(tarea);
    } else {
        alert('Debe llenar el campo');
    }
}

const crearTarea = (tarea) => {
    const el = document.createElement('li');
    const x = document.createElement('span');
    el.className = "list-group-item";
    el.innerText = tarea;
    x.innerText = "X";
    x.className = 'boton-borrar';
    el.appendChild(x);
    listGroup.appendChild(el);
    setLS(tarea);
}

const setLS = (tarea) => {
    if (localStorage.getItem('tareas') == undefined) {
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas))
    } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }
}

const getLS = () => {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if (tareas == undefined) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    return tareas;
}
const loadLSDOM = () => {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if (tareas == undefined) {
        true
    } else {
        tareas.forEach(tarea => {
            let el = document.createElement('li');
            const x = document.createElement('span');
            el.innerText = tarea;
            el.className = 'list-group-item';
            x.innerText = "X";
            x.className = 'boton-borrar';
            el.appendChild(x);
            listGroup.appendChild(el);
            console.log(el);
        })
    }
}
const deleteDOM= (e) => {
    if (e.target.className == 'boton-borrar') {
        e.target.parentElement.remove();
        borrarTarea(e.target.parentElement.innerText);
    } 
}
const borrarTarea = (tarea) => {
    let tareas = getLS();
    let tareaBorrar = tarea.substring(0, tarea.length - 1);

    tareas.forEach((tarea, index) =>{
        if(tareaBorrar == tarea) {
             tareas.splice(index, 1);
        }
   }) ;

   localStorage.setItem('tareas',JSON.stringify(tareas));

};
//Listeners
form.addEventListener('submit', revision);
document.addEventListener('DOMcontentloaded', loadLSDOM());
listGroup.addEventListener('click', deleteDOM)