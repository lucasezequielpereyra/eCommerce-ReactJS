import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Context
import { useCartContext } from "../../context/CartContext"
// Icons
import { FaShoppingCart } from 'react-icons/fa'
// Styles
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
