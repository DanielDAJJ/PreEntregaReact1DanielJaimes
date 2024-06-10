import React from 'react'
import UseProducts from '../../Hooks/UseProducts'

const ItemDetailsContainer = ({products}) => {
  // React.useEffect(()=>{
  //   getProductById()
  // })
    return <div className='itemListContainer'>{products}</div>
  
}

export default ItemDetailsContainer