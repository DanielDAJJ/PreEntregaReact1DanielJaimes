import React from 'react'
import { getProductById } from '../services/ProductsServices';

export const UseProductById = (id) => {
    const [product, setProduct] = React.useState({});
    React.useEffect(() => {
        getProductById(id).then((result) => {
            setProduct(result.data);
        }).catch((err) => {
            console.log(err)
        });
    }, []) 
  return {product}
}

export default UseProductById