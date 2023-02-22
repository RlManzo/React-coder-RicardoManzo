import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { getProductos } from '../firebase/firebase';
import { cargarDB } from '../firebase/firebase';
const App = () => {
 cargarDB()
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element= {<ItemListContainer/> }/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:idCategoria' element= {<ItemListContainer/> }/>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;

