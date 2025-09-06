import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorComponent';
import { CartProvider } from './context/CartContext'; //Se llama al proveedor para dar acceso a los componentes
import { CartContainer } from './components/CartContainer';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Hola! 👋🏼' mensaje='Bienvenido/a a Patio, e-commerce donde encontrarás los productos más lindos para decorar tu hogar.' />} />
          <Route path='/categories/:category' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
