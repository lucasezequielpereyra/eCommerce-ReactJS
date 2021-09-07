import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'

const CartWidget = () => {

    const { totalProductos } = useCartContext()

    return (
        <div className='cart-widget'>
            {
                totalProductos() > 0 &&  <Link to ='/cart' className='widget'><FaShoppingCart /> {totalProductos()}</Link> 
            }
        </div>
    )
}

export default CartWidget
