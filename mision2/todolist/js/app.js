const input = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");
const vacio = document.querySelector(".empty");
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
    }else{
        alert("la tarea no puede estar vacia");
    }
    
}