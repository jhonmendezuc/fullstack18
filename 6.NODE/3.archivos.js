/*
console.log("operacion1");
//funcion asincrona nativa de JS
setTimeout(() => {
  console.log("establecer una conexion..");
  console.log("operacion2 - conexion bd");
  console.log("operacion2 - terminada");
}, 5000);

console.log("operacion3");
*/

import { read, readFile, writeFile } from "node:fs";

const estudiantes = [];

readFile("archivos/estudiantes.json", "utf-8", (err, datos) => {
  if (err) {
    console.error("no se leyo el archivo");
  }
  console.log(typeof datos);
  console.log(datos);
  //deserializacion - parseo - casting /// JSON -> OBJ
  const estudiantesObjeto = JSON.parse(datos);
  console.log(estudiantesObjeto);
  console.log(typeof estudiantesObjeto);
  //console.log(estudiantesObjeto[0].nombre);
  estudiantesObjeto.array.forEach((element) => {
    estudiantes.push(element);
  });
});

let estudiante = {
  nombre: "jhon",
  apellido: "mendez",
  edad: 45,
};
estudiantes.push(estudiante);
//serializacion - stringyfy-> obj -> JSON
const estudianteJson = JSON.stringify(estudiante);
writeFile("archivos/estudiantes.json", estudianteJson, "utf-8", (err) => {
  if (err) {
    console.error("no se leyo el archivo");
  }
  console.log("estudiante guardado con exito");
});
