import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorComponent';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { SearchResultsContainer } from './components/SearchResultsContainer';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categories/:category' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='*' element={<ErrorComponent />} />
          <Route path="/search/:query" element={<SearchResultsContainer />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
