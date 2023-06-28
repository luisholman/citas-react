import { useState, useEffect } from "react"

export const FormularioPractica = () => {

    const [mascota, setMascota]=useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail]= useState('');
    const [fecha,setFecha]=useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false); /* 2 */

   const handleSubmit=(e)=>{  /* 3 start */
    e.preventDefault();
  

   //validacion de formulario
   if ([mascota, propietario, email, fecha, sintomas].includes('')){
    console.log('campos vacios')
    setError(true)
   }else{
    setError(false)
   }                                /* 3 end */
}

    return (
        <div className='md:w-1/2 lg:w-2/5 ml-10 mx-10 '>
            <h2 className='text-center font-black text-3xl '>Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className='text-indigo-600 font-bold '>Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit} /* 3  */
                className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 ">
                
                {error && /* 2 paso */
                    <div className='bg-red-700 p-3 rounded-md mb-5' >
                        <p className=" text-white text-center uppercase font-bold ">Todos los campos son obligatorios</p>
                    </div> 
                } {/*si error es true entonces ejecuta esto*/}
                
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">
                        Nombre Mascota 
                    </label>

                    <input  
                        type="text"
                        id="mascota"
                        placeholder="ingrese Nombre de Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 bg-white border-gray-400 rounded-md"
                        value={mascota}
                        onChange={(e)=>setMascota(e.target.value)}
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
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    
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
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    
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
                        value={fecha}
                        onChange={(e)=>setFecha(e.target.value)}
                    
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
                        value={sintomas}
                        onChange={(e)=>setSintomas(e.target.value)}
                        
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