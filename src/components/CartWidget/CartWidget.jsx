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

    const { totalProducts, setLocalStorage } = useCartContext()

    return (
        <div className='cart-widget'>
            {
                totalProducts() > 0 && 
                <>
                    <Link to ='/cart' className='widget'><FaShoppingCart /> {totalProducts()}</Link> 
                    {setLocalStorage()}  {/* Guardo los items en localstorage desde acá, porque en el onAdd de itemdetail, presenta errores  */}
                </>
            }
        </div>
    )
}

export default CartWidget
