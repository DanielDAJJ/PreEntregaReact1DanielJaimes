import React from 'react'
import UseProductById from '../../Hooks/UseProductById'
import ItemDetailComponent from '../components/ItemDetailComponent/ItemDetailComponent'

const Item = () => {
  const {product} = UseProductById(id)
  return (
    <ItemDetailComponent product = {product.id}/>
  )
}

export default Item