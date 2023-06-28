
import {useState} from "react" /* paso 4 */
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]); /* paso 4 */

  return (
    <div className='container mx-auto pt-20 '>
      <Header />

      <div className="mt-12 md:flex ">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      
      /* paso 4 */
  
      />
   
      

      <ListadoPacientes
        pacientes={pacientes}
      />
      </div>
      
    </div>
  )
}

export default App
