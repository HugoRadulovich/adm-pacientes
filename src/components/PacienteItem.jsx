

export const PacienteItem = ({pacientes, onDeletePacientes, setPaciente}) => {
  return (
   <>
     {
                  pacientes?.map(paciente => (
                        <li className="border" key={paciente.id }>
                       
                        <p className=""><span>Negro:</span> {paciente.nombre}</p>
                        <p className="">Propietario: {paciente.propietario}</p>
                        <p className="">Email: {paciente.email}</p>
                        <p className="">Fecha Alta: {paciente.alta}</p>
                        <p className="">Sintomas: {paciente.sintomas}</p>
                        <button className="border-2 border-black" onClick = {() => setPaciente(paciente)}>Editar</button>
                        <button className="border-2 border-black" onClick={()=> onDeletePacientes(paciente.id )}>Eliminar</button>
                        </li>
                  ))
                }
   </>
  )
}
