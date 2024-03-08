import { useState } from 'react'
import ControlUsuario from './components/usuarios/ControlUsuario';
import TuitsPublicados from './components/tuits/TuitsPublicados';
import TuitsUsuario from './components/tuits/TuitsUsuario';
import ControlTuits from './components/tuits/ControlTuits';


function App() {

  const [usuario,setUsuario] = useState('');

  return (
    <>
      <h1>Bienvenido a Y (Antiguo Tuiter)</h1>
      <ControlUsuario usuario={usuario} setUsuario={setUsuario}/>
      <ControlTuits usuario={usuario}/>
    </>
  )
}

export default App
