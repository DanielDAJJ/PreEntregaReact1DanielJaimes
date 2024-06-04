import React, { useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'

const Home = () => {
    useEffect(() => {
        document.title = "Sabores Del Alma"
    }, [])
  return (
    <div>
        <ItemListContainerComponent/>
    </div>
  )
}

export default Home