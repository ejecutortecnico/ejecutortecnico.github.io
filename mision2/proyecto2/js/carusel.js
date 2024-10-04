let imagenes = document.querySelectorAll(".carousel img");
let indiceActual = 0;
function mostrarImagen(indice) {
imagenes.forEach((img, i) => {
img.style.display = i === indice ? "block" : "none";
});
}
document.getElementById("anterior").addEventListener("click", function() {
indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
mostrarImagen(indiceActual);
});
document.getElementById("siguiente").addEventListener("click", function() {
indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
mostrarImagen(indiceActual);
});
mostrarImagen(indiceActual);
