import { useState } from "react";
import Formulario from "./components/Formulario";


function App() {

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // funcion que toma las citas actuales y agrega una nueva
  const crearCita = cita => {
    setCitas([ ...citas, cita ]);
  }

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={ crearCita }
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
