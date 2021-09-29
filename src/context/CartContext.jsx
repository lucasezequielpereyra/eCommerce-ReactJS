import React, { useContext, useState, createContext } from "react"

//Firebase
import { db } from '../firebase'
import { 
	addDoc,
	serverTimestamp, 
	collection, 
	query, 
	orderBy, 
	getDocs, 
	updateDoc, 
	doc, 
	limit, 
} from "firebase/firestore"
// Sweet Alert
import swal from 'sweetalert'


export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const getLocalStorage = () => {
	if (JSON.parse(localStorage.getItem('cart'))) {
		return JSON.parse(localStorage.getItem('cart'))
	} else{
		return []
	}
}

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(
		getLocalStorage()
	)

	const setLocalStorage = () => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const isInCart = (id) => cart.some((item) => item.id === id);

	const addProduct = (product, quantity) => {
		if (isInCart(product.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === product.id) {
					return { ...cartElement, quantity: cartElement.quantity + quantity }
				} else return cartElement;
			})
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...product, quantity }])
		}
	}

	const removeProduct = (itemid) => {
		setCart(cart.filter((elem) => elem.id !== itemid))

		cart.length === 1 && localStorage.clear() // Limpio el localstorage si no hay items en el cart
	}

	const cleanCart = () => setCart([])

	const totalProducts = () => {
		let total = 0
		cart.map((prd) => {
			return (
				total += prd.quantity
			)
		})

		return total
	}

	const totalPrice = () => {
		let totalPrice = 0
		cart.map((prd) => {
			return (
				totalPrice += (prd.price * prd.quantity)
			)
		})
		return totalPrice
	}

	const newOrder = async (name, phone, mail, userId) => {
		await addDoc(collection(db, 'orders'), {
			buyer: {
				name: name,
				phone: phone,
				mail: mail,
				id: userId
			},
			items: cart,
			date: serverTimestamp(),
			total: totalPrice()
		})
		localStorage.clear() // Limpio el cart una vez realizada la compra
	}

	const lastOrder = async () => {
		const orders = []
		const q = query(collection(db, "orders"), orderBy("date", "desc"), limit(1))

		const querySnapshot = await getDocs(q)

		querySnapshot.forEach((doc) => {
			orders.push(doc.id)
		})

		return (
			swal({
				title: "Compra Exitosa",
				text: `La compra fue realizada con exito, el id es ${orders[0]}`,
				icon: "success",
				button: "Volver",
			})
		)
	}
	
	const updateItemStock = async (id, quantity) => {
		const updateStock = doc(db, 'products', id)

        await updateDoc(updateStock, {
            "stock": quantity
        })
	}

	return (
		<CartContext.Provider value={{ 
			cart,
			addProduct, 
			removeProduct, 
			cleanCart, 
			totalProducts, 
			totalPrice, 
			newOrder, 
			lastOrder, 
			updateItemStock, 
			setLocalStorage,
		}}>
			{children}
		</CartContext.Provider>
	);
};