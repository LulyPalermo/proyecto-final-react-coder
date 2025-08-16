import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Hola! 👋🏼' mensaje='Bienvenido/a a Patio, e-commerce donde encontrarás los productos más lindos para decorar tu hogar.' />
      <ItemDetailContainer />
    </>
  )
}

export default App
