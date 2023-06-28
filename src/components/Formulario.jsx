import { useState, useEffect } from "react"
import { Error } from "./mensajeError";

export const Formulario = ({ pacientes, setPacientes /* paso 4  */}) => {

    const [mascota, setMascota]=useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail]= useState('');
    const [fecha,setFecha]=useState('');
    const [sintomas, setSintomas]= useState('');

    const generarId=()=>{
        const random= Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36);

        return random + fecha
    }

    const [error,setError]=useState(false);  /* 2 paso */


    const handleSubmit = (e)=>{  /* 3 star */
        e.preventDefault();

        //validacion del formulario
        if ([mascota,propietario,email,fecha,sintomas].includes('')){
            console.log('campos vacios')
            setError(true)
        }else{
            setError(false)  /* 3 end */
        
            //objeto de paciente 
            const objetoPaciente= {
                mascota,
                propietario,
                email,
                fecha,
                sintomas,
                id:generarId()
            }
        
            //console.log(objetoPaciente)

            setPacientes([...pacientes, objetoPaciente])/* paso 4 */
        
            //Reiniciar el formulario que quede sin datos
            setMascota('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
        }
    }
            

    return (
        <div className='md:w-1/2 lg:w-2/5 ml-10 mx-10 '>
            <h2 className='text-center font-black text-3xl '>Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className='text-indigo-600 font-bold '>Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit} /* paso 3 */
                className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 ">
                
                {error && <Error> <p>Todos los campos son obligatorios</p></Error>  /* paso 2 */} {/*si error es true entonces ejecuta esto*/}
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