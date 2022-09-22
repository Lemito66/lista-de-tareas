import "./App.css";
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <Tarea 
            texto='Aprender React'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
