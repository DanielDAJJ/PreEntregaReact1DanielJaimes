import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import ItemDetailsContainer from '../pages/ItemDetailsContainer';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';

const MainRaoutes = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={ItemDetailsContainer}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default MainRaoutes