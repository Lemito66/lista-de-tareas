import React, { useState } from "react";

import "../styles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setinput] = useState("");

  const manejarCambio = (e) => {
    setinput(e.target.value); // Extraer el valor del input cuando escriba
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); //No se vuelva a cargar toda la aplicacion cuando recargue la aplicacion
    //console.log("Enviando Información");
    const tareaNueva = {
      id: uuidv4(), //Paquete uuid que se utiliza para hacer id unicos
      texto: input, //Ahora el valor sera el de input
      completada: false,
    };
    props.onSubmit(tareaNueva); // Va a pasar una tarea nueva
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
