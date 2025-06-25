import { useState, useEffect } from "react";

const Estados = (props) => {
  let { numero } = props;

  const [contador, setContador] = useState(numero);
  const [contador2, setContador2] = useState(100);

  function incrementar() {
    setContador(parseInt(contador + 1));
    setContador2(parseInt(contador2 + 1));
  }

  function reiniciar() {
    setContador(numero);
  }

  function actualizacion() {
    console.log("Actualizacion...", contador);
  }

  useEffect(actualizacion, [contador, contador2]);
  return (
    <>
      <h1>{contador}</h1>
      <h1>{contador2}</h1>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={reiniciar}>reiniciar</button>
    </>
  );
};

export default Estados;
