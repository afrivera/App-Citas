import React from 'react';

const Formulario = () => {
  return (
      <>
        <h2>Crear Cita</h2>
        <form>
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className='u-full-width'
                placeholder='Nombre Mascota'
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className='u-full-width'
                placeholder='Nombre Dueño de la mascota'
            />
            <label>fecha</label>
            <input
                type="date"
                name="fecha"
                className='u-full-width'
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className='u-full-width'
            />
            <label>Sintomas</label>
            <textarea
                className='u-full-width'
                name='sintomas'
            ></textarea>
            <button
                type='submit'
                className='button-primary u-full-width'
            >Agregar Cita</button>
        </form>
      </>    
    
  )
}

export default Formulario;