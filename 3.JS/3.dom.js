//selectores: elemento, tipo, id, clase, atributo, padre, pseudoselectores
let titulo = document.getElementById("titulo-formulario");
//modifficar el dom
titulo.innerHTML = "Formulario de registro";
titulo.innerHTML = "Formulario de registro estudiante";
//cambio de estilos
titulo.style.color = "red";

let campoTexto = document.getElementsByClassName("campo-texto");
console.log(campoTexto);

//campoTexto[1].style.border = "1px solid red";
Array.from(campoTexto).forEach((elemento) => {
  elemento.style.border = "1px solid blue";
});

/*
for (let i = 0; i < campoTexto.length; i++) {
  campoTexto[i].style.border = "1px solid red";
} */

let edadEstudiante = document.querySelector("#edad-estudiante");
edadEstudiante.value = 20;
console.log(edadEstudiante.value);

let capturarDatos = document.getElementById("registrar-datos");

let estudiantes = [];
let estudiantesRegistro = document.getElementById("tabla-estudiantes");
console.log(estudiantesRegistro);
capturarDatos.addEventListener("click", () => {
  let nombreEstudiante = document.getElementById("nombre-estudiante").value;
  let apellidoEstudiante = document.getElementById("apellido-estudiante").value;
  let edadEstudiante = document.getElementById("edad-estudiante").value;
  let estudiante = {
    nombre: nombreEstudiante,
    apellido: apellidoEstudiante,
    edad: edadEstudiante,
  };
  estudiantes.push(estudiante);
  alert("Datos guardados correctamente");
});

let consultarEstudiantes = document.getElementById("consultar-datos");
consultarEstudiantes.addEventListener("click", () => {
  console.log(estudiantes);

  estudiantes.forEach((estudiante) => {
    estudiantesRegistro.innerHTML =
      estudiantesRegistro.innerHTML +
      `
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.apellido}</td>
        <td>${estudiante.edad}</td>
      </tr>
    `;
  });
  estudiantes = [];
});
