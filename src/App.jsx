import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios, {isCancel, AxiosError} from 'axios';
import MainRaoutes from './routes/MainRaoutes';

const App = () => {
  
  return(
    <>
    <MainRaoutes/>
    </>
  )
}

export default App;