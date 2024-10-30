let palabras = [
    "texto",
    "informacion",
    "prueba",
    "colegio",
    "sopa",
    "perro",
    "casa",
    "lote",
    "plata",
    "playa"
]
let intentos = 1;
let control = 0;
let total;
const marcoJuego = document.getElementById("juego");
const gameover = document.getElementById("gameover");
const ingreso = document.getElementById("ingreso");
let indice = parseInt(Math.random() * 3)
let palabra = palabras[indice];
total = palabra.length;
numeroletras = palabra.length;
function juego(){
    for(let i = 0; i< numeroletras;i++){
        const inputs = document.createElement("input");
        inputs.setAttribute("id", "Div" + i);
        inputs.style.width = "10px";
        marcoJuego.appendChild(inputs);

    }
}

function verificar(){
    letra = ingreso.value;
    let j=0;
    for(let i of palabra){
        if(i === letra){
            total--;
            control = 1 ;
            input = document.getElementById("Div" + j);
            input.value = letra;
        }
        j++;
    }
    if(control == 0){
        document.getElementById("img" + intentos).style.display = "none";
        intentos++;
        document.getElementById("img" + intentos).style.display = "block";
        alert("la letra no coincide con la palabra");
    }
    if(intentos > 6){
        marcoJuego.style.display = "none";
        gameover.style.display = "block";
        alert("El Juego Termino");
        return
    }
    if(total == 0){
        gameover.innerText = "Has Ganado";
        gameover.style.fontSize = "40px";
        gameover.style.display = "block";
    }
    control=0;
}

juego();