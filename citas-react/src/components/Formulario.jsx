import { useState, useEffect } from "react";

import Error from "./Error";


function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Como validar el formulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return;
    } 
    setError(false)

    //Construimos un objeto por cada paciente

    const obejtoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }

    if(paciente.id) {
      //Editando el Registro
      obejtoPaciente.id = paciente.id

      const pacienteActualizados = pacientes.map(pacienteState => 
        pacienteState.id === paciente.id ? obejtoPaciente : pacienteState
      )
      console.log(pacienteActualizados)

      setPacientes(pacienteActualizados)
      setPaciente({})

    } else {
      obejtoPaciente.id = generarId()
      setPacientes([...pacientes, obejtoPaciente])
    }

    
    
    
    //Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  };



  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir y Administrar {""}
        <span className="text-indigo-600 font-bold">Pacientes</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {/* Props */}
        {error && <Error mensaje='Todos los campos son obligatorios'/>}
        {/* Children */}
        {/* {error && <Error><p>Todos los campos son obligatorios</p></Error>} */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-Mail contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
}

export default Formulario;
