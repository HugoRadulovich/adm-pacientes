
import { useState, useEffect } from "react"
import { PacienteItem } from "./components/PacienteItem";
import { Formulario } from "./components/Formulario";


function App() {
  const init = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(init)
  const [paciente, setPaciente] = useState([])

  

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) 
  //     console.log(pacientesLS)
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
      
  // }, [])


  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])
 
  

const onDeletePaciente = (id) => {
    const newPacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(newPacientes)
}


  return (
    <>
      <header className="h-40 flex justify-center items-center">
        <h1 className="text-center text-4xl font-bold ">Seguimiento de <span className="text-blue-500">Pacientes Veterinaria</span></h1>
      </header>
      <main className="grid grid-cols-2 h-screen ">
        <section className="flex flex-col  gap-2 p-2 m-2 ">
          <h1 className=" text-2xl font-bold text-blue-400 text-center">Agregar Pacientes</h1>
         
          <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}/>
        </section>
        <section className=" flex flex-col  gap-2 p-2 m-2 ">
            <h1 className="text-2xl font-bold text-blue-400 text-center">{(pacientes.length > 0) ? 'Lista de pacientes' : 'Carga un paciente'}</h1>
             
              <ul className="">
                <PacienteItem 
                  pacientes={pacientes} 
                  onDeletePacientes= {onDeletePaciente}
                  setPaciente = {setPaciente} 
                  />
              </ul>
        </section>
      </main>
    </>
  )
}

export default App



  // const generadId = () => {
  //   const random = Math.random().toString(36).substring(2);
  //   const fecha = Date.now().toString(36)

  //   return random + fecha
  // }

//   const handleInputChange = ({target}) => {
//       const {name,value} = target;
//       setFormState({
//           ...formState,
//           [name]: value
//       })

//   }

//   const handleOnSubmit = (event) => {
//       event.preventDefault()
   
//       console.log(formState)
//       console.log(pacientes)
//       setPacientes([...pacientes, formState])
      

//       setFormState({
//       id: Date.now(), 
//       nombre: '',
//       propietario: '',
//       email:'',
//       alta:'',
//       sintomas: '',})

//       console.log(pacientes)
// }