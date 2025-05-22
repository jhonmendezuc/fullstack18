//modulos nativos de js-modulo OS
import os from "node:os"; //importando modulo nativo
import User from "./0.User.js"; //importando un modulo propio

console.log(os.platform());
console.log(os.release());
console.log("memoria disponible: ", os.freemem());
console.log("memoria total: ", os.totalmem());
console.log("directorio raiz: ", os.homedir());
console.log("arquitectura: ", os.arch());
