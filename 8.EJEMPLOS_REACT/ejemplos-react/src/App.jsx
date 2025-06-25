import "./App.css";
import PrimerComponente from "./components/PrimerComponente.jsx";
import FichaEstudiante from "./components/FichaEstudiante.jsx";
import Task from "./components/Task.jsx";
import Estados from "./components/Estados.jsx";
function App() {
  const task = [
    {
      id: "6840fb23af60afbca9ae2f70",
      title: "tarea actualizada a gabriel",
      description: "tarea actualizada",
      status: true,
      userId: "683faf868adda31145e65dde",
    },
    {
      id: "6840fb29af60afbca9ae2f71",
      title: "tarea actualizada a gabriel",
      description: "tarea actualizada",
      status: false,
      userId: "683faf868adda31145e65dde",
    },
    {
      id: "6840fb2eaf60afbca9ae2f72",
      title: "tarea 3 - jhon",
      description: "description1",
      status: false,
      userId: "683faf868adda31145e65dde",
    },
  ];

  function handleDeleteTask(id) {
    console.log("eliminando tarea ->", id);
  }

  return (
    <>
      <h1>Ejemplo React</h1>
      <PrimerComponente titulo="mi titulo" parrafo="mi parrafo" />
      <FichaEstudiante
        nombre="jhon"
        apellido="mendez"
        correo="jhon@gmail.com"
      />
      <hr />
      <FichaEstudiante
        nombre="camilo"
        apellido="ramirez"
        correo="camilo@gmail.com"
      />
      <hr />
      <Task data={task} clickTask={handleDeleteTask} />
      <hr />
      <Estados numero="0" />
    </>
  );
}

export default App;
