//FORMULARIO DE DETECTIVE

const formulario = document.querySelector("#fDetective");
const resultado = document.querySelector("#resultadoDetective");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que se recargue la página al enviar el formulario

    const estudio = document.querySelector("#op-hora").value;
    const rutina = document.querySelector("#op-plaza").value;
    const familia = document.querySelector("#op-viaje").value;
    const gustos = document.querySelector("#op-foto").value;
 

    if (estudio === "Seleccione" || 
        rutina === "Seleccione" ||
        familia === "Seleccione" ||
        gustos === "Seleccione") {

        alert("Tenés que elegir todos los campos de la ficha");

    } else {

        let aciertos = 0;

        if (estudio === "Verdadero") aciertos++;
        if (rutina === "Falso") aciertos++;
        if (familia === "Verdadero") aciertos++;
        if (gustos === "Verdadero") aciertos++;

        // Convertimos los aciertos en puntos
        if (aciertos === 4) {
            puntosActividad1 = 3;
        } else if (aciertos === 3) {
            puntosActividad1 = 2;
        } else if (aciertos === 2) {
            puntosActividad1 = 1;
        } else {
            puntosActividad1 = 0;
        }

        actualizarPuntos();

        alert("Tuviste " + aciertos + " respuestas correctas. " +
              "Conseguiste " + puntosActividad1 + " de 3 puntos.");

        resultado.style.display = "block";
    }
});


//Formulario de semáforo

const fSemaforo = document.querySelector("#fSemaforo");


fSemaforo.addEventListener("submit", function(event) {
    let seccion = document.querySelector("#resultadoSemaforo");
    event.preventDefault();

    const correctas = ["rojo", "rojo", "amarillo", "verde", "rojo", "amarillo"];
    const nombres = ["contraseña", "direccion", "foto", "pelicula", "ubicacion", "horario"];

    let aciertos = 0;
    let completas = true;

    for (let i = 0; i < nombres.length; i++) {
        const respuesta = document.querySelector(
            'input[name="' + nombres[i] + '"]:checked'
        );

        if (respuesta === null) {
            completas = false;
        } else if (respuesta.value === correctas[i]) {
            aciertos++;
        }
    }

    if (completas === false) {
        alert("Debés responder todas las preguntas.");
    } 
        
else {
    // Cada respuesta correcta vale 1 punto
    puntosActividad2 = aciertos;

    actualizarPuntos();

    seccion.style.display = "block";

    alert("Tuviste " + aciertos +
          " respuestas correctas. Conseguiste " +
          puntosActividad2 + " de 6 puntos.");

    // Mostramos la actividad final (Al fin pude arreglarlo!)
    document.querySelector("#actividad3").style.display = "block";
}
}); 


// FORMULARIO DE MISIÓN

const fMision = document.querySelector("#fMision");
const resultadoMision = document.querySelector("#resultadoMision");

fMision.addEventListener("submit", function(event) {
    event.preventDefault();

    const mision = document.querySelector("#mision").value;

    if (mision.trim() === "") {
        alert("Debés completar la misión.");
    } else {

        puntosActividad3 = 1;

        actualizarPuntos();

        resultadoMision.textContent =
            "¡Misión completada! Obtuviste 1 punto provisional. " +
            "Tu docente revisará tu respuesta y confirmará el puntaje definitivo.";

        resultadoMision.style.display = "block";

        alert("¡Felicitaciones! Tu puntaje de forma provisional es " +
              puntosTotales + " de 10 puntos.");

        document.querySelector("#recomendaciones").style.display = "block";
    }
});
// Función para mostrar los desafíos
function mostrarSeccion() {
    let seccion = document.querySelector("#actividades-todas");

    seccion.style.display = "block";
}
/* Función para mostrar la sección de retroalimentación 1 */
function mostrarRetro1(){
    let seccion=document.querySelector("#resultadoDetective");
    const estudio = document.querySelector("#op-hora").value;
    const rutina = document.querySelector("#op-plaza").value;
    const familia = document.querySelector("#op-viaje").value;
    const gustos = document.querySelector("#op-foto").value;
 

    if (estudio != "Seleccione" && 
        rutina != "Seleccione" &&
        familia != "Seleccione" &&
        gustos != "Seleccione") {

            if (seccion.style.display==="none"){
        seccion.style.display="block";      
           }
    }
}

/* Función para mostrar la sección de actividades 2 y 3 */
function mostrarSeccion2y3(){
    let seccion=document.querySelector("#actividades-2y3");
   
    const estudio = document.querySelector("#op-hora").value;
    const rutina = document.querySelector("#op-plaza").value;
    const familia = document.querySelector("#op-viaje").value;
    const gustos = document.querySelector("#op-foto").value;
 

 if (estudio != "Seleccione" &&
    rutina != "Seleccione" &&
    familia != "Seleccione" &&
    gustos != "Seleccione") {

            if (seccion.style.display==="none"){
        seccion.style.display="block";      
           }
    }
   
    

}

// pUNTOS -Nuevos

let puntosTotales = 0;

let puntosActividad1 = 0;
let puntosActividad2 = 0;
let puntosActividad3 = 0;

// Actualiza el puntaje que aparece en la página
function actualizarPuntos() {
    puntosTotales = puntosActividad1 +
                    puntosActividad2 +
                    puntosActividad3;

    document.querySelector("#puntos").textContent = puntosTotales;
}
