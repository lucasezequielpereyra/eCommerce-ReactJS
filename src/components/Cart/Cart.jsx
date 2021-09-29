import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Context
import { useCartContext } from "../../context/CartContext"
// Components
import CartItem from '../CartItem/CartItem'
import FormBuyer from '../FormBuyer/FormBuyer'
// Styles
import './Cart.css'


const Cart = () => {

    const { cart, totalPrice } = useCartContext()


    const showProducts = () => {
        return(
            <>
                {cart.map((prd) => {
                    return (
                        <CartItem item={prd} key={prd.id}/>
                    )
                })}
                <div className='price-container'>Carrito: u$s{totalPrice()}</div>
                <FormBuyer />
            </>
        )
	} 

    const cartEmpty = () => {
        return(
            <div className='cartEmpty-container'>
                <Link to='/' style={{textDecoration:"none", textTransform:"uppercase"}}>
                    <h3>Agregar productos</h3>
                </Link>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            <h3 style={{color: "rgb(12, 81, 172)", textTransform:"uppercase", marginBottom:"4rem"}}>Tu Carrito</h3>
            {
                cart.length > 0 ? showProducts(totalPrice) : cartEmpty()
            }
        </div>
    )
}

export default Cart
