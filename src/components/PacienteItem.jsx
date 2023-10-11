

export const PacienteItem = ({pacientes, onDeletePacientes, setPaciente}) => {
  return (
   <>
     {
                  pacientes?.map(paciente => (
                        <li className="  shadow-xl shadow-red-400 rounded-xl  mb-6 mt-4 p-5 " key={paciente.id }>
                          <div className="m-2">
                          <p className="m-2"><span className="font-bold">Negro:</span> {paciente.nombre}</p>
                          <p className="m-2"><span className="font-bold">Propietario:</span> {paciente.propietario}</p>
                          <p className="m-2"><span className="font-bold">Email:</span> {paciente.email}</p>
                          <p className="m-2"><span className="font-bold">Fecha Alta:</span> {paciente.alta}</p>
                          <p className="m-2"><span className="font-bold">Sintomas: </span>{paciente.sintomas}</p>
                          <button className="border-2 border-black bg-blue-500 w-40 h-9 m-2 rounded hover:bg-blue-400" onClick = {() => setPaciente(paciente)}>Editar</button>
                          <button className="border-2 border-black  bg-red-500 w-40 mr-2 h-9 rounded hover:bg-red-400" onClick={()=> onDeletePacientes(paciente.id )}>Eliminar</button>
                          </div>
                        </li>
                  ))
                }
   </>
  )
}
