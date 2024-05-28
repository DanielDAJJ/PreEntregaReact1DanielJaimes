import React from 'react';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios, {isCancel, AxiosError} from 'axios';

const App = () => {
  
  return(
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting={"Bienvenidos a sabores del alma"}/>
    </>
  )
}

export default App;