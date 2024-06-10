import React, { useState } from 'react'
import { getAllProducts } from '../services/ProductsServices';

export const UseProducts = () => {
  const [products, setProducts] = React.useState ([]);
  React.useEffect (() => {
    getAllProducts().then((response) => {
        setProducts(response.data)
    }).catch((err) => {
        console.log(err);
    });
  })
  return {products}
}

export default UseProducts