const inputemail = document.getElementById("email");
const inputclave = document.getElementById("clave");
const miElemento = document.getElementById("miElemento");
const myForm = document.querySelector("form");
myForm.addEventListener("click", function(event){
    event.preventDefault();
});
function validarform(){
    const expresion = new RegExp('^(.+)@(\\S+)$');
    if(expresion.test(inputemail.value)){
        console.log("Si ");
        //return true;
    }else{
        alert("el correo tiene formato incorrecto");
        return;
    }
   if(inputclave.value === ""){
        alert("debe ingresar una clave");
   }else{
    if(inputclave.value == "miclave"){
        alert("ha ingresado correctamente");
        miElemento.innerHTML = "Bienvenido " + inputemail.value;
    }else{
        alert("la clave esta equivocada");
    }
   }
}


