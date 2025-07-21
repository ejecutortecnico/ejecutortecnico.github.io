// Preguntas del juego
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Madrid", "París", "Londres", "Roma"],
        correcta: 1
    },
    {
        pregunta: "¿Cuántos continentes hay?",
        respuestas: ["5", "6", "7", "8"],
        correcta: 2
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correcta: 2
    }
];

let preguntaActual = 0;
let puntaje = 0;

// Mostrar la pantalla de inicio
document.getElementById('inicio').style.display = 'block';

// Botón para comenzar
document.getElementById('empezar').addEventListener('click', function() {
    document.getElementById('inicio').style.display = 'none';
    mostrarPregunta();
    document.getElementById('juego').style.display = 'block';
});

// Mostrar la siguiente pregunta
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById('textoPregunta').innerText = pregunta.pregunta;

    // Asignar respuestas a los botones
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`res${i + 1}`);
        btn.innerText = pregunta.respuestas[i];
        btn.onclick = function() {
            comprobarRespuesta(i);
        };
    }
}

// Comprobar si la respuesta es correcta
function comprobarRespuesta(respuestaSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    if (respuestaSeleccionada === pregunta.correcta) {
        puntaje++;
    }
    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// Mostrar el resultado final
function mostrarResultado() {
    document.getElementById('juego').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultadoTexto').innerText = `¡Juego terminado! Tu puntaje es: ${puntaje} de ${preguntas.length}`;
}

// Finalizar juego
document.getElementById('finalizar').addEventListener('click', function() {
    window.location.reload();
});
