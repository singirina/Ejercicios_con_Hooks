import React, { useState } from "react";

const Elemento = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    contador < 10 && setContador(contador + 1);
  };
  const restar = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <>
      <h1 className="cabecera">Contador con useEstate</h1>
      <h1>
        <b>{contador}</b>
      </h1>
      <button onClick={sumar}>Sumar 1</button>
      <button onClick={restar}>Restar 1</button>
    </>
  );
};
export default Elemento;
