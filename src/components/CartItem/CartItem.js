import React from 'react'
// Context
import { useCartContext } from "../../context/CartContext"
// Bootstrap
import { Card } from 'react-bootstrap'
// Icons
import { IoMdRemoveCircle } from 'react-icons/io'
// Styles
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
