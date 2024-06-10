import React, { useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import UseProducts from '../../Hooks/UseProducts'

const Home = () => {
  const {products} = UseProducts()
  return (
    <div>
        <ItemListContainerComponent products = {products}/>
    </div>
  )
}

export default Home