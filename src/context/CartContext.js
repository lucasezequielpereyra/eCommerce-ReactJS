import React, { useContext, useState, createContext } from "react"

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const isInCart = (id) => cart.some((item) => item.id === id);

	const agregarProducto = (producto, cantidad) => {
		if (isInCart(producto.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === producto.id) {
					return { ...cartElement, cantidad: cartElement.cantidad + cantidad }
				} else return cartElement;
			})
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...producto, cantidad }])
		}
	}

	const eliminarProducto = (itemid) => {
		setCart(cart.filter((elem) => elem.id !== itemid));
	}

	const limpiar = () => setCart([])

	const totalProductos = () => {
		let total = 0
		cart.map((prd) => {
			return(
				total += prd.cantidad
			)
		})

		return total
	}

	const totalPrecio = () => {
		let totalPrecio = 0 
		cart.map((prd) => {
			return(
				totalPrecio +=  (prd.price * prd.cantidad)
			)
		})
		return `$${totalPrecio}`
	}

	return (
		<CartContext.Provider value={{ cart, agregarProducto, eliminarProducto, limpiar, totalProductos, totalPrecio }}>
			{children}
		</CartContext.Provider>
	);
};