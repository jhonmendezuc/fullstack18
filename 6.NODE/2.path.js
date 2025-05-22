import path from "node:path";

const rutaImagen = path.join("micarpeta", "imagenes", "logo.png");
console.log(rutaImagen);
console.log(path.basename(rutaImagen));
console.log(path.extname(rutaImagen));
