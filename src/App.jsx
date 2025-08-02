import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'


function App() {

  


  return (
    <>
      <NavBar/>
      <ItemListContainer saludo='Hola! 👋🏼' mensaje='Bienvenido/a a Patio, e-commerce donde encontrarás los productos más lindos para decorar tu hogar.'/>
    </>
  )
}

export default App
