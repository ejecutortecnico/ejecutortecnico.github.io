const lista = document.getElementById("lista");
const tarea = document.getElementById("tareas");
const boton = document.getElementById("boton");

boton.addEventListener("mouseout", function(event){
    console.log(event);
    agregarTareas();
});

function agregarTareas(){
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = tarea.value;
    lista.appendChild(nuevaTarea);
}

function eleminarTareas(){
    //document.removeChild();
}