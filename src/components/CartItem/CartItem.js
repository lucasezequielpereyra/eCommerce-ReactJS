import React from 'react'
import { useCartContext } from "../../context/CartContext"
import { Card } from 'react-bootstrap'
import { IoMdRemoveCircle } from 'react-icons/io'

import './CartItem.css'

const CartItem = ( {item} ) => {

    const { eliminarProducto } = useCartContext()

    return (
        <div className='cart-item container'>  
            <Card body >{item.name} - {item.cantidad}  <IoMdRemoveCircle onClick={() => eliminarProducto(item.id)} /></Card>
        </div>
    )
}

export default CartItem
