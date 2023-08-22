const addButton = document.querySelector('#addButton');
const tasklist = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');
const deleteButton = document.querySelector('#deleteButton');
let deleteMode = false; // Variable para controlar el modo de eliminación


function addTask() {
    if (taskInput.value == 0) {
        alert('Debe ingregar una Tarea')
    }
    else{
        let newElement = document.createElement('li')
        tasklist.append(newElement)
        newElement.textContent = taskInput.value
    }
}
/*
function removeTask() {
    
}*/

addButton.addEventListener('click', (event) => {
    addTask()
})
//Al hacer click a Agregar (addButton) se tiene que capturar
//lo que haya en taskInput, el string no puede ser igual
// a "Ingrese una tarea" o se toma como nulo,
//si eso pasa no se aceptara la tarea nueva.
//Caso contrario, se debera crear un li (listItem)
//dentro de taskList, con el string de la nueva tarea