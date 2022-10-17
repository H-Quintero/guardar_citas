import { useEffect } from "react";

import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente,eliminarPaciente }) {
  useEffect(() => {
    if (pacientes.length > 0) {
      console.log(pacientes);
    }
  }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Admistrar {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className=" h-screen md:overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Admistrar {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
