import React from 'react'

const Cita = ({ cita, eliminarCita }) => {
    const { mascota, propietario, fecha, hora, sintomas, id} = cita
  return (
    <div className='cita'>
        <p>Mascota: <span>{mascota}</span> </p>        
        <p>dueño: <span>{propietario}</span> </p>        
        <p>fecha: <span>{fecha}</span> </p>        
        <p>hora: <span>{hora}</span> </p>        
        <p>sintomas: <span>{sintomas}</span> </p>   

        <button
            className='button eliminar u-full-width'
            onClick={()=> eliminarCita(id)}
        >Eliminar &times;</button>     
    </div>
  )
}

export default Cita