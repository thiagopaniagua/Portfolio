import './App.css'
import Educacion from './components/Educacion'
import Encabezado from './components/Encabezado'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import Header from './components/header'

function App() {
  

  return (
    <div className='container-fluid body'> 
    <Header></Header>
     <Encabezado></Encabezado>
     <Proyectos></Proyectos>
     <Educacion></Educacion>
    </div>
  )
}

export default App
