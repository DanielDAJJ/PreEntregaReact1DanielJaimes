import React from 'react'

const ItemDetailComponent = ({product}) => {
    
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img src={product.thumbnail} alt={product.name} />
    </div>
  )
}

export default ItemDetailComponent