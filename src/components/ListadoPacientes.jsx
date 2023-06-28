import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes }) => {

    //console.log(pacientes);


    return (
        <div className='md:w-1/2 lg:w-3/5 pl-10 pr-10 md:h-screen overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='text-center font-black text-3xl'>Listado pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">Administra tus {''}
                        <span
                            className="text-indigo-600 font-bold">Pacientes y Citas
                        </span>

                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                        />
                    )

                    )}

                </>

            ) : (<>
                    <h2 className='text-center font-black text-3xl'>No hay pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">Comienza agregando pacientes {''}
                        <span
                            className="text-indigo-600 font-bold">y apareceran en este lugar
                        </span>

                    </p>


                </>)}












        </div>
    )
}