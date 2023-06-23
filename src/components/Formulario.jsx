
export const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5 ml-10 '>
            <h2 className='text-center font-black text-3xl '>Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className='text-indigo-600 font-bold '>Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 ">
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">
                        Nombre Mascota

                    </label>

                    <input type="text"
                    id="mascota"
                        placeholder="ingrese Nombre de Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">
                        Nombre Propietario

                    </label>

                    <input 
                        type="text"
                        id="propietario"
                        placeholder="ingrese Nombre de Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">
                        Email

                    </label>

                    <input 
                        type="email"
                        id="email"
                        placeholder="ingrese su Correo"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md "
                    />
                </div>

                
                <div className="mt-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">
                        Alta

                    </label>

                    <input 
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md "
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">
                        Sintomas

                    </label>

                    <textarea 
                    id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                    />
                </div>

                <input 
                    type="submit"
                     className='
                     bg-indigo-500 w-full p-3 mt-5 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all'
                    value="Agregar Paciente"
                />

            </form>


        </div>
    )
}