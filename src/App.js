import { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";


function App() {

  // citas en local storage
  let citasIniciales = JSON.parse( localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }


  // Arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando cambia el state
  useEffect(() => {
    if( citasIniciales ){
      localStorage.setItem('citas', JSON.stringify( citas ))
    } else {
      localStorage.setItem('citas', JSON.stringify( [] ))
    }
  }, [ citas ]);
  

  // funcion que toma las citas actuales y agrega una nueva
  const crearCita = cita => {
    setCitas([ ...citas, cita ]);
  }

  // eliminar citas por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    setCitas( nuevasCitas );
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
            <h2>{citas.length === 0 ? 'No hay citas' : 'Administra tus citas' }</h2>
            {
              citas.map( cita => (
                <Cita 
                  key={cita.id}
                  cita={ cita }
                  eliminarCita={ eliminarCita }
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
