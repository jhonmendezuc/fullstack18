//FORMAS DE CREAR OBJETOS
//FORMA#1 - objetos literales
let estudiantes = [];

let estudiante = {
  nombre: "jhon",
  apellido: "mendez",
  edad: 78,
  saludar: function () {
    console.log("hola");
  },
};
let estudiante2 = {
  nombre: "felipe",
  apellido: "ramirez",
  edad: 78,
  correo: "felipe@gmai.com",
};
//imprimir todo el objeto
console.log(estudiante);
//imprimir un atributo del objeto
console.log(estudiante.nombre);
estudiantes.push(estudiante);
estudiantes.push(estudiante2);
//imprimir la lista de estudiantes
console.log(estudiantes);
console.log(estudiante2);
//modificacion de un atributo
estudiante.nombre = "maria";
console.log(estudiante);
console.log(estudiante.saludar());

//FORMA#2 DE CREAR OBJETOS - CLASES
class Profesor {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let profesor1 = new Profesor("jhon", "mendez", 78, "jhon@gmail.com");
console.log(profesor1);

let profesor2 = new Profesor("felipe", "ramirez", 78);
console.log(profesor2);

//FORMA#3 DE CREAR OBJETOS - OBJECT
let profesor3 = new Object();
profesor3.nombre = "maria";
profesor3.apellido = "perez";
profesor3.edad = 78;
profesor3.correo = "maria@gmai.com";
console.log(profesor3);
//FORMA#3 DE CREAR OBJETOS - FUNCIONES
function crearProfesor(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

let profesor4 = new crearProfesor("jhon", "mendez", 78);
console.log(profesor4);
