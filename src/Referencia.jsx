import React, { useRef, useState } from "react";

const Referencia = () => {
  const [entrada, valueInput] = useState("");
  const valorInput = useRef(null);
  const btn = useRef(null);

  const enviar = () => {
    valueInput(valorInput.current.value);
    valorInput.current.value = null;
    btn.current.className = "rojo";
    valorInput.current.className = "azulito";
    valorInput.current.focus();
  };

  return (
    <>
      <h1 className="cabecera">Ejercicio con useRef</h1>
      <h2>{entrada}</h2>
      <input
        type="text"
        ref={valorInput}
        // onChange={(e) => {
        //   setEl(e.target.value);
        // }}
      />
      <button ref={btn} onClick={enviar}>
        Enviar
      </button>
    </>
  );
};
export default Referencia;
