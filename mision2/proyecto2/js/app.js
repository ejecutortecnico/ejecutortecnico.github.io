// let edad = 18;
//  function calculoedad(edad){
//     if (edad < 18) {
//         console.log("Eres menor de edad.");
//         } else if (edad >= 18 && edad < 65) {
//         console.log("Eres adulto.");
//         } else {
//         console.log("Eres mayor.");
//         }
//  }
//  for(let i=1;i<=100;i++){
//     calculoedad(i);
//  }

// let dia = 3;
// switch (dia) {
// case 1:
// console.log("Lunes");
// break;
// case 2:
// console.log("Martes");
// break;
// case 3:
// console.log("Miércoles");
// break;
// default:
// console.log("Día no válido");
// }


//  edad = 20;
//  let mensaje = (edad >= 18) ? "mayor." : "menor";
//  console.log(mensaje);
let lista = [];
let elemento = document.getElementById("contenido");
for(let carro of carros){
    if(carro.mpg >= 20){
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(carro.marca);
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("contenido");
        document.body.insertBefore(newDiv, currentDiv);
    }
     
}

elemento.innerHTML = lista;
