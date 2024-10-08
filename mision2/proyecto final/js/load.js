const divSitio = document.getElementById("sitios");

window.addEventListener("load", function (event) {
    let numSitios = localStorage.getItem("sitios");
    console.log(numSitios);
    for(let i=1; i<=numSitios;i++){        
        let sitio = JSON.parse(localStorage.getItem("sitio"+ i));;
        agregarElementos(sitio,i);
    }
    console.log("'Todos los recursos terminaron de cargar!");
  });

  function agregarElementos(dato,i){
    const newPlace = document.createElement("div");
    for (const property in dato) {
        if(property == "imagen"){
            const newDiv = document.createElement("img");
            newDiv.setAttribute("id", "img" + i);
            newDiv.src = "imagenes/" + dato[property];
            newPlace.appendChild(newDiv);
        }else{
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", "Div" + i);
            newDiv.innerText = property + "=" + dato[property];
            newPlace.appendChild(newDiv);
        }
      }
      divSitio.appendChild(newPlace);

       
  }