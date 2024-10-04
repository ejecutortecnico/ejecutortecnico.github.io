tabla = document.getElementById("tcarros");

for(let carro of carros){
    console.log(carro);
    if(carro.mpg >= 30){
        crearFila(carro);
    }
}

function crearFila(carro){
    const nuevafila = document.createElement("tr");
    const nuevacolumna1 = document.createElement("td");
    nuevacolumna1.textContent = carro.marca;
    nuevacolumna1.style.fontSize = "50px";
    nuevafila.appendChild(nuevacolumna1);

    const nuevacolumna2 = document.createElement("td");
    nuevacolumna2.innerText = carro.mpg;
    nuevafila.appendChild(nuevacolumna2);

    const nuevacolumna3 = document.createElement("td");
    nuevacolumna3.innerText = carro.cyl;
    nuevafila.appendChild(nuevacolumna3);

    const nuevacolumna4 = document.createElement("td");
    nuevacolumna4.innerText = carro.hp;
    nuevafila.appendChild(nuevacolumna4);

    const nuevacolumna5 = document.createElement("td");
    nuevacolumna5.innerText = carro.gear;
    nuevafila.appendChild(nuevacolumna5);
    tabla.appendChild(nuevafila);
}