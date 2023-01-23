import React from 'react';
import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import './App.css';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer holaMundo={'Bienvenidos'}/>
    </>
  );
}

export default App;

