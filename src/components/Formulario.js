import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';


// estado inicial formulario
const initialState = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
};

const Formulario = ({ crearCita}) => {
    // state de citas
    const [cita, setCita] = useState(initialState);
    const [error, setError] = useState(false);

    // funcion que se ejecuta cuando el usuario escribe en los inputs
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // cuando se presiona agregar cita
    const handleForm = e=> {
        e.preventDefault();
        
        // validar campos
        if(mascota.trim() === '' || propietario.trim() === '' || hora.trim() === '' || sintomas.trim() === '' || fecha.trim() === ''  ){
            setError( true );
            return;
        }
        // eliminar alerta
        setError(false);

        // asignar id
        cita.id = uuid();

        // crear cita
        crearCita(cita);

        // reiniciar form
        setCita( initialState );

    }
  return (
      <>
        <h2>Crear Cita</h2>
        {
            /* condicion si se presenta algún error de validacion en los campos */
            error && <p className='alerta-error'>Todos los Campos son Obligatorios</p>
        }
        <form onSubmit={ handleForm }>
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={handleChange}
                value= { mascota }
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className='u-full-width'
                placeholder='Nombre Dueño de la mascota'
                onChange={handleChange}
                value= { propietario }
            />
            <label>fecha</label>
            <input
                type="date"
                name="fecha"
                className='u-full-width'
                onChange={handleChange}
                value= { fecha }
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className='u-full-width'
                onChange={handleChange}
                value= { hora }
            />
            <label>Sintomas</label>
            <textarea
                className='u-full-width'
                name='sintomas'
                onChange={handleChange}
                value= { sintomas }
            ></textarea>
            <button
                type='submit'
                className='button-primary u-full-width'
            >Agregar Cita</button>
        </form>
      </>    
    
  )
}

// documentar los componentes con proptypes
Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default Formulario;