import { useState,useEffect  } from "react"


export const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

    const [formState, setFormState] = useState({
        id: Date.now(),
        nombre: '',
        propietario: '',
        email:'',
        alta:'',
        sintomas: '',
    })

    useEffect(() => {
     if (Object.keys(paciente).length > 0) {
        setFormState({ 
            id: paciente.id,
            nombre: paciente.nombre,
            propietario: paciente.propietario,
            email:paciente.email,
            alta:paciente.alta,
            sintomas: paciente.sintomas,}) 
     }
   
    }, [paciente])
    


    
    const handleInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        

        if (paciente.id) {
            console.log('editando')
            formState.id = paciente.id;
            const pacienteEdit = pacientes?.map( pacienteEdit => pacienteEdit.id === formState.id ? formState : pacienteEdit  )
            setPacientes(pacienteEdit)
            console.log(formState)
            setPaciente([])
            
        } else {
            console.log('agreando')
            setPacientes([...pacientes, formState])
            onResetForm();
        }

        // Resetear el form
    onResetForm();


}

const onResetForm = () => {
    setFormState({ 
        id: Date.now(),
        nombre: '',
        propietario: '',
        email:'',
        alta:'',
        sintomas: '',}) 
}


    return (
        <form className="flex flex-col  gap-1 h-full mt-4" onSubmit={handleOnSubmit}>
            <label htmlFor="nombre" className="font-bold ml-1 ">Nombre Mascota</label>
            <input 
                type="text"
                name = "nombre" 
                className="border-2 border-black rounded-lg h-12 ml-1 p-2 w-5/6 "
                placeholder="Tino, Argus ...." 
                value = {formState.nombre}
                onChange = {handleInputChange}
            />
            <label htmlFor="" className="font-bold ml-1 mt-4">Nombre Propietario</label>
            <input
                type="text" 
                name = "propietario" 
                className="border-2 border-black rounded-lg h-12 ml-1 p-2 w-5/6 "
                placeholder="Jose Fernandez...." 
                value = {formState.propietario}
                onChange = {handleInputChange}
            />
            <label htmlFor="" className="font-bold ml-1 mt-4">Email</label>
            <input 
                type="text"
                name="email" 
                className="border-2 border-black rounded-lg h-12 ml-1 p-2 w-5/6 " 
                placeholder="nombre13@example.com" 
                value = {formState.email}
                onChange = {handleInputChange}
            />
            <label htmlFor="" className="font-bold ml-1 mt-4">Alta</label>
            <input 
                type="date" 
                name = "alta"
                className="border-2 border-black rounded-lg h-12 ml-1 p-2 w-5/6 " 
                placeholder=""
                value = {formState.alta}
                onChange = {handleInputChange}
            
            />
            <label htmlFor="" className="font-bold ml-1 mt-4">Sintomas</label>
            <input 
                type="text" 
                name="sintomas"
                className="border-2 border-black rounded-lg h-12 ml-1 p-2 w-5/6 " 
                placeholder="Descripción de los sintomas..."
                value = {formState.sintomas}
                onChange = {handleInputChange}
                />
                
            <input 
                type='submit' 
                className="border-2 border-black rounded-lg h-12 ml-1 mt-5  p-2 w-5/6 bg-blue-500 font-bold hover:bg-blue-400 " 
                value= {(Object.keys(paciente).length > 0) ? 'Editar' : 'Agregar Paciente'}/>
            </form>
    )
}
