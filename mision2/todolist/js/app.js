const input = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");
const vacio = document.querySelector(".empty");
tareas = []
form = document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
});
boton.addEventListener("click", jugar);

function jugar(){
    const element = document.createElement("li");
    if(input.value != ""){
        vacio.style.display = "none";
        element.innerText = input.value;
        lista.appendChild(element);
        tareas.push(input.value)
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }else{
        alert("la tarea no puede estar vacia");
    }
    
}

function cargar(){
    tareas = JSON.parse(localStorage.getItem("tareas"))
    vacio.style.display = "none";
    for(tarea of tareas){
        const element = document.createElement("li");
        element.innerText = tarea;
        lista.appendChild(element);

    }
    

}