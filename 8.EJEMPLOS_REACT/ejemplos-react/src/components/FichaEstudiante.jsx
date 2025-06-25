function FichaEstudiante(objeto) {
  const { nombre, apellido, correo } = objeto;
  return (
    <>
      <div>
        <label htmlFor="">
          <strong>Nombre</strong>
        </label>
        <br />
        <i>{nombre}</i> <br />
        <label htmlFor="">
          <strong>Apellido</strong>
        </label>
        <br />
        <i>{apellido}</i> <br />
        <label htmlFor="">
          <strong>Correo</strong>
        </label>
        <br />
        <i>{correo}</i>
      </div>
    </>
  );
}

export default FichaEstudiante;
