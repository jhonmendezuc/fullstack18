import { readFile, writeFile } from "node:fs";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
/*
const tarea = {
  titulo: "tarea1",
  descripcion: "descripcion1",
  estado: false,
}; */

function ejemploCallback() {
  //callback: elemento de llamado asincrono
  rl.question("ingrese el titulo de la tarea:\n", (titulo) => {
    rl.question("ingrese el descripcion de la tarea:\n", (descripcion) => {
      rl.question("ingrese el estado de la tarea:\n", (estado) => {
        console.log(`titulo: ${titulo}`);
        var tarea = {
          titulo: titulo,
          descripcion: descripcion,
          estado: estado,
        };
        console.log(tarea);
        rl.close();
      });
    });
  });
}

//ejemploCallback();
//promesas: elementos de llamado asincrono
function ingresarPregunta(pregunta) {
  return new Promise((resolve, reject) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      if (pregunta == "salir") {
        reject("salir");
      }
    });
  });

  /*rl.question("ingrese el titulo de la tarea:\n", (titulo) => {

  }); */
}
console.log("inicio");

async function ejemploPromesas() {
  try {
    const titulo = await ingresarPregunta("ingrese el titulo de la tarea:\n");
    const descripcion = await ingresarPregunta(
      "ingrese el descripcion de la tarea:\n"
    );
    const estado = await ingresarPregunta("ingrese el estado de la tarea:\n");

    const tarea = {
      titulo: titulo,
      descripcion: descripcion,
      estado: estado,
    };

    console.log(tarea);
  } catch (error) {
    console.log(error);
  }
}
ejemploPromesas();
//console.log("fin");
