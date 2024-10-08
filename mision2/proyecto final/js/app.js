const sitio = document.getElementById("sitioturistico");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const slogan = document.getElementById("slogan");
let numeroSitios=0;

function guardarSitio(){
   newSite = {};
   newSite.nombre = sitio.value;
   newSite.descripcion = descripcion.value;
   newSite.precio = precio.value;
   newSite.imagen = imagen.value;
   newSite.slogan = slogan.value;
   numeroSitios = localStorage.getItem("sitios")?localStorage.getItem("sitios"):0;
   numeroSitios++;
   localStorage.setItem("sitios", numeroSitios);
   localStorage.setItem("sitio" + numeroSitios, JSON.stringify(newSite));
   console.log(newSite);
   sitio.value = "";
   descripcion.value = "";
   precio.value = "";
   imagen.value = "";
   slogan.value = "";
}