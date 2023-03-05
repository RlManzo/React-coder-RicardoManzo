import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { getProductos } from '../firebase/firebase';
import { CarritoProvider } from '../context/CarritoContext';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Carousel from './Carousel/Carousel';
import Swal from 'sweetalert2';
import Contacto from './Contacto/Contacto';
const App = () => {
 
  return (
    <>
  <BrowserRouter>
     <CarritoProvider>
       <Navbar/>
       <Routes>
          <Route path='/' element= {<ItemListContainer/> }/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:idCategoria' element= {<ItemListContainer/> }/>
          <Route path='/contacto' element={<Contacto/>}/> 
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
     </CarritoProvider> 
  </BrowserRouter>
    </>
  );
}

export default App;

