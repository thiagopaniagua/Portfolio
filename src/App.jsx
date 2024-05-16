import './App.css'
import Educacion from './components/Educacion'
import Encabezado from './components/Encabezado'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'
import Header from './components/header'

function App() {
  

  return (
    <div className='container-fluid body'> 
    <Header></Header>
     <Encabezado></Encabezado>
     <Educacion></Educacion>
      <Proyectos></Proyectos>
      <Tecnologias></Tecnologias>
    </div>
  )
}

export default App
