import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TareaFormulario from "./TareaFormulario";

function Tarea({ texto, completada }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
      <div>
        <TareaFormulario/>
      </div>
    </div>
  );
}

export default Tarea;