import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
    const customStyle = {
        color: 'white',
        fontSize: '3rem',
        width: '100dvw',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    }
  return (
    <div style={customStyle}>{greeting}</div>
  )
}

export default ItemListContainerComponent