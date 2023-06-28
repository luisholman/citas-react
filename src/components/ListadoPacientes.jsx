import { Paciente } from "./Paciente"

export const ListadoPacientes = ({pacientes}) => {

    //console.log(pacientes);


    return (
        <div className='md:w-1/2 lg:w-3/5 pl-10 pr-10 md:h-screen overflow-y-scroll'>
            <h2 className='text-center font-black text-3xl'>Listado pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">Administra tus {''}
                <span
                    className="text-indigo-600 font-bold">Pacientes y Citas
                </span>

            </p>

            {pacientes.map( paciente =>(
                <Paciente
                    paciente={paciente}
                />
            )
                
            )}
            

            
                


        </div>
    )
}