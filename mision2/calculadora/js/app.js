let valor1;
const pantalla = document.getElementById("pantalla")
let numero1 = 0
let numero2 = 0
let resultado = 0
let operacion = 0

function ejecutar(r){
     numero1=pantalla.value
	 pantalla.value = ""
	 operacion = r 
}

function n1(r){
	valor1 = pantalla.value
	if(valor1 != ""){
		pantalla.value += r
	}else{
		pantalla.value = r
	}
}

function igual(){
	console.log(operacion)
	if(operacion == "sumar"){
		numero2=pantalla.value
		pantalla.value = parseFloat(numero1) + parseFloat(numero2)
	}else if(operacion == "restar"){
		numero2=pantalla.value
		pantalla.value = parseFloat(numero1) - parseFloat(numero2)
	}else if(operacion == "multiplicar"){
		numero2=pantalla.value
		pantalla.value = parseFloat(numero1) * parseFloat(numero2)
	}else if(operacion == "dividir"){
		numero2=pantalla.value
		pantalla.value = parseFloat(numero1) / parseFloat(numero2)
	}
	
}