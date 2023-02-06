import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element= {<ItemListContainer/> }/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:Categoria' element= {<ItemListContainer/> }/>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;

