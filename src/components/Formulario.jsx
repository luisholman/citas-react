import { useState, useEffect/*8. useEffect paso1 */ } from "react"
import { Error } from "./mensajeError";

export const Formulario = ({ pacientes, setPacientes, /* paso 4  */
    paciente/*7. paso para mostrar lo editado .2*/
    ,setPaciente/*10.   .7*/
}) => {

    const [mascota, setMascota]=useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail]= useState('');
    const [fecha,setFecha]=useState('');
    const [sintomas, setSintomas]= useState('');

    const [error,setError]=useState(false);  /* 2 paso */

    //para useEfeccts /*8. paso2 */
    useEffect( ()=>{
        if( Object.keys(paciente).length>0){

            setMascota(paciente.mascota)//para useEfeccts /*8. pasopara que se vea en el input los datos */
            setPropietario(paciente.propietario)//para useEfeccts /*8. pasopara que se vea en el input los datos */
            setEmail(paciente.email)//para useEfeccts /*8. pasopara que se vea en el input los datos */
            setFecha(paciente.fecha)//para useEfeccts /*8. pasopara que se vea en el input los datos */
            setSintomas(paciente.sintomas)//para useEfeccts /*8. pasopara que se vea en el input los datos */
        }
    }, [paciente])





    const generarId=()=>{
        const random= Math.random().toString(36).substr(2);
        const fecha= Date.now().toString(36);

        return random + fecha
    }

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
                //id:generarId()  /*10. eliminamos este codigo .3 */
            }

            /*10. para arreglar errores al momento de oprimir el boton de editar .1 */
            if(paciente.id ){
                //editando el registro
                /*10. creamos este codigo inicio .5 */
                objetoPaciente.id=paciente.id
                
                const pacientesActualizados = pacientes.map ( pacienteState =>pacienteState.id ===
                    paciente.id ? objetoPaciente : pacienteState )

                    setPacientes(pacientesActualizados)
                /*10. creamos este codigo fin.5 */
                    setPaciente ({})/*10.   .7*/

            } else{
                //nuevo  registro
                objetoPaciente.id = generarId();/*10. creamos este codigo .4 */
                setPacientes([...pacientes, objetoPaciente]) /*10 se paso de abjo para aqui  .2 */
            }

        
            //FIXME: TODO:console.log(objetoPaciente)

            // setPacientes([...pacientes, objetoPaciente])/* paso 4 */ /*10. se paso para el if    .2*/
        
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
                    value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}/*9. para que cambie la informacion que se encuenrta en el boton */
                />

            </form>


        </div>
    )
}