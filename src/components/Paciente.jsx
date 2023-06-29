

export const Paciente = ({ paciente, setPaciente/*6.setPaciente paso para editar btn .5*/ }) => {
    //console.log(paciente)

   
    const { mascota, propietario, email, fecha, sintomas } = paciente

    return (
        <div className="bg-white mt-5 shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold uppercase mb-3 text-gray-700">Nombre: {''}
                <span className="font-normal normal-case"> {mascota} </span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold uppercase mb-3 text-gray-700">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg"
                    onClick={() => setPaciente(paciente)/*6. paso para editar btn .6*/}
                > Editar</button>

            <button type="button" className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg">Eliminar</button>
        </div>
            
            </div >
    )
}