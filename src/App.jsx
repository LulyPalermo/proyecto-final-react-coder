import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorComponent';
import { NavLink } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<ItemListContainer saludo='Hola! 👋🏼' mensaje='Bienvenido/a a Patio, e-commerce donde encontrarás los productos más lindos para decorar tu hogar.' />} />
        <Route path='/categories/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<ErrorComponent />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
