const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. ¿Cuál es el lenguaje estándar específico para aplicar estilos de presentación a nuestras páginas web?",
    respuestas: {
      a: "Java",
      b: "CSS",
      c: "JS",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. ¿Qué es XHTML?",
    respuestas: {
      a: "Es la como se conoce a la familia genérica de las distintas versiones de HTML",
      b: "Es el HTML Dinamico",
      c: "La adaptación del estándar HTML según las reglas XML",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. ¿Cuál crees que es la mejor manera de aplicar estilos a una página web?",
    respuestas: {
      a: "Incluir un script con todos los estilos del css",
      b: "Incluir los estilos en las etiquetas HTML para que se carguen y ejecuten antes",
      c: "Incluirlos en la sección cabecera ('head') para agruparlos en un mismo sitio en la misma página",
      d: "Incluirlos en un fichero externo vinculado a ese fichero HTML",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. ¿Por qué es conveniente incluir la declaración de DOCTYPE en la página HTML?",
    respuestas: {
      a: "Para evitar que el navegador entre en 'Quirk Mode' y la interprete/muestre mal",
      b: "Para lograr plagio de la misma",
      c: "Para contribuir a los procesos de seleccion de archivos del modo docs",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. ¿Para que sirve el atributo 'class'?",
    respuestas: {
      a: "Para asignar clases al documento",
      b: "Para colocar un indice dentro de la pagina",
      c: "Para aplicar unos determinados estilos a los elementos que tenga la misma clase, es decir, el mismo valor en ese atributo",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. ¿Qué función tiene el elemento 'div'?",
    respuestas: {
      a: "Para modificar los archivos",
      b: "Crear diviciones dentro de bloques ",
      c: "Es un contenedor. Crea bloques",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. ¿Qué significa que una etiqueta/elemento está 'deprecated' en HTML?",
    respuestas: {
      a: "Que el archivo fue corrompido",
      b: "Que ya no forma parte de las especificaciones",
      c: "Que va a provocar eventos de interaccion",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Si incluimos una etiqueta de este tipo en nuestra página HTML, ¿qué queremos que haga el navegador <img src=../icono.gif?",
    respuestas: {
      a: "Que anexe datos de ese tipo",
      b: "Que incluya la imagen 'icono.gif' ",
      c: "Que cargue todos los datos",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. Los '..' (dos puntos) hace que vaya a buscar la imagen al directorio padre (de nivel superior).",
    respuestas: {
      a: "Con la etiqueta de apertura ' al principio y final del comentario",
      b: "Con los signos de menor y mayor",
      c: "Con las interacciones del usuario",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Cuál es una etiqueta de tipo titulos y subtitulos en HTML?",
    respuestas: {
      a: "Button",
      b: "H1 y H2",
      c: "Border Radius",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);