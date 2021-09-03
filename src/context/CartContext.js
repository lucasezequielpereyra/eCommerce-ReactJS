import React, { useContext, useState, createContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const isInCart = (id) => cart.some((item) => item.id === id);

	const agregarProducto = (producto, cantidad) => {
		if (isInCart(producto.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === producto.id) {
					return { ...cartElement, cantidad: cartElement.cantidad + cantidad };
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...producto, cantidad }]);
		}
	};

	const eliminarProducto = (itemid) => {
		setCart(cart.filter((elem) => elem.item.id !== itemid));
	};

	const limpiar = () => setCart([]);

	return (
		<CartContext.Provider value={{ cart, agregarProducto, eliminarProducto, limpiar }}>
			{children}
		</CartContext.Provider>
	);
};