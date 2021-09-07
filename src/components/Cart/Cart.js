import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

import CartItem from '../CartItem/CartItem'

import './Cart.css'


const Cart = () => {

    const { cart, totalPrecio } = useCartContext()


    const mostrarProductos = () => {
        return(
            cart.map((prd) => {
                return (
                    <CartItem item={prd} key={prd.id}/>
                )
            })
            
        )
	} 

    const carritoEmpty = () => {
        return(
            <Link to='/'><h3>El carrito se encuentra vacio, para agregar productos haz click sobre este mensaje</h3></Link>
        )
    }

    return (
        <div className='cart-container'>
            <h3 style={{color: "rgb(12, 81, 172)"}}>Tu Carrito </h3>
            {
                cart.length > 0 ? mostrarProductos() : carritoEmpty()
            }

            {
                totalPrecio() !== 0 && `Total: ${totalPrecio()}`
            }
        </div>
    )
}

export default Cart
