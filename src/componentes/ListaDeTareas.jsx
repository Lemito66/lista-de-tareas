import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../styles/ListaDeTareas.css'
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, settareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea)
        if (tarea.texto.trim()) { //Verificar si la cadena no esta vacia
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]; //Agregamos la tarea al principio y lo pasamos a un objeto individual
            settareas(tareasActualizadas);//Añadir las tareas anteriores a las nuevas
        }
    }

    return(
        // A esto se le llaama fragmentos cuando no se quiere agregar un contenedor adicional
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea
                            key={tarea.id}//Identificar valores en la lista, para no tener errores 
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );
}
export default ListaDeTareas;