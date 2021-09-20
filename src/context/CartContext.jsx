import React, { useContext, useState, createContext } from "react"

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const isInCart = (id) => cart.some((item) => item.id === id);

	const addProduct = (product, quantity) => {
		if (isInCart(product.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === product.id) {
					return { ...cartElement, quantity: cartElement.cantidad + quantity }
				} else return cartElement;
			})
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...product, quantity }])
		}
	}

	const removeProduct = (itemid) => {
		setCart(cart.filter((elem) => elem.id !== itemid));
	}

	const cleanCart = () => setCart([])

	const totalProducts = () => {
		let total = 0
		cart.map((prd) => {
			return(
				total += prd.quantity
			)
		})

		return total
	}

	const totalPrice = () => {
		let totalPrice = 0 
		cart.map((prd) => {
			return(
				totalPrice +=  (prd.price * prd.quantity)
			)
		})
		return totalPrice
	}

	return (
		<CartContext.Provider value={{ cart, addProduct, removeProduct, cleanCart, totalProducts, totalPrice }}>
			{children}
		</CartContext.Provider>
	);
};