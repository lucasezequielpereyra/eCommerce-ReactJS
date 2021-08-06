import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <span className='widget'><FaShoppingCart /></span>
        </div>
    )
}

export default CartWidget
