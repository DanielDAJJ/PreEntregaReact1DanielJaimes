import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
    const customStyle ={
        fontSize: '1.5rem'
    }
  return (
    <div>
        <FontAwesomeIcon icon={faCartArrowDown} style={customStyle}/>
        <span style={customStyle}>0</span>
    </div>
  )
}

export default CartWidgetComponent