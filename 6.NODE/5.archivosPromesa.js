import { readFile } from "node:fs/promises";

async function leerArchivo() {
  try {
    const datos = await readFile("archivos/estudiantes.json", "utf-8");
    console.log(datos);
  } catch (error) {
    console.log("error de lectura", error);
  }
}

leerArchivo();

//ejemplo con then
readFile("archivos/estudiantes.json", "utf-8")
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.log("error de lectura", error);
  });
