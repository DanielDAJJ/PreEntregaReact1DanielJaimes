import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import ItemDetailsContainer from '../pages/ItemDetailsContainer';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import Item from '../pages/Item';
import Category from '../pages/Category';

const MainRaoutes = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/item/:id" element={<Item/>}/>
            <Route path="/item/:id" element={<ItemDetailsContainer/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default MainRaoutes