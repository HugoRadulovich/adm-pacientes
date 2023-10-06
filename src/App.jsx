
import { useState, useEffect } from "react"
import { PacienteItem } from "./components/PacienteItem";
import { Formulario } from "./components/Formulario";


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])
  // const [formState, setFormState] = useState({
  //     id: Date.now(),
  //     nombre: '',
  //     propietario: '',
  //     email:'',
  //     alta:'',
  //     sintomas: '',
  // })
  

 useEffect(() => {
  if (paciente.length === 0) return 
 }, [paciente])
 
  

const onDeletePaciente = (id) => {
    const newPacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(newPacientes)
}


  return (
    <>
      <header className="">
        <h1 className="text-center">Seguimiento de Pacientes Veterinaria</h1>
      </header>
      <main className="grid grid-cols-2 h-screen ">
        <section className="bg-indigo-600 flex flex-col gap-2">
          <h1 className="text-center text-3xl font-bold">Agregar Pacientes</h1>
          <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}/>
        </section>
        <section className="bg-red-600 flex flex-col gap-2">
            <h1 className="text-center text-3xl font-bold">Comienza agregando un paciente y apareceran en este lugar</h1>
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