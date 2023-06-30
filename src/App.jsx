
import {useState, useEffect} from "react" /* paso 4 */
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]); /*TODO: paso 4 */
  const [paciente, setPaciente]=useState({});/*6. paso para editar btn .1*/
  
  useEffect(()=>{ /*TODO: 12. localStorage 2 */
    const obtenerLocalStorage=()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLocalStorage();
  },[])

  useEffect(()=>{/*TODO: 12. localStorage 1 */
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {  /*11.    1 */
    const pacientesActualizados=pacientes.filter( paciente => paciente.id !== id)/*11.   7 */
    setPacientes(pacientesActualizados)/*11.   8 */
  }

  return (
    <div className='container mx-auto pt-20 '>
      <Header />

      <div className="mt-12 md:flex ">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}/* paso 4 */
      paciente={paciente}   /*7. paso para mostrar lo editado .1*/
      setPaciente={setPaciente} /*10.   .6*/
      />
   
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}/*6. paso para editar btn .2*/
        eliminarPaciente={eliminarPaciente} /*11.    2 */
      />
      </div>
      
    </div>
  )
}

export default App
