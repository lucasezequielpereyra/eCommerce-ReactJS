import React, { useContext, useState, createContext } from "react"
//Firebase
import { db } from '../firebase'
import { 
    addDoc,
    collection,
    query,
    where,
    getDocs,
    doc,
    deleteDoc
} from "firebase/firestore"
// Sweet Alert
import swal from 'sweetalert'
// AUTH0
import { useAuth0 } from '@auth0/auth0-react'

export const WishContext = createContext()

export const useWishContext = () => useContext(WishContext)

export const WishProvider = ({ children }) => {

	const { user } = useAuth0()

	const [wish, setWish] = useState([])

	const newWish = async (userId, item) => {
		await addDoc(collection(db, 'wishOrders'), {
			userId: userId,
			item: item
		})
	} 

	const addwWishList = async (userId, item, setButtonWish) => {
		const wishOrders = []
		const q = query(collection(db, "wishOrders"), where("userId", "==", userId))

		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => {
			wishOrders.push(doc.data())
		})
	
		if(wishOrders.length > 0) {
			let check = false 
			// eslint-disable-next-line array-callback-return
			wishOrders.map((wishList) => {
				if(wishList.userId === userId && wishList.item.id === item.id) {
					swal({
						title: "Advertencia",
						text: `El producto ${item.name} ya se encuentra agregado a la lista de deseos`,
						icon: "warning",
						button: "OK",
					})
					check = true
				}
			})
			if (!check) {
				swal({
					title: "Listo!",
					text: `El producto ${item.name} se agrego correctamente a la lista de deseos`,
					icon: "success",
					button: "OK",
				})
				newWish(userId, item)
			}
		} else {
			swal({
				title: "Listo!",
				text: `El producto ${item.name} se agrego correctamente a la lista de deseos`,
				icon: "success",
				button: "OK",
			})
			newWish(userId, item)
		}
	}

    const getWishesByUser = async (user) => {
        const docs = []
        const q = query(collection(db, 'wishOrders'), where('userId', '==', user.sub))

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
        })
        setWish(docs)
    }

	const deleteWishProduct = async (data) => {
		await deleteDoc(doc(db, "wishOrders", data.id))
		getWishesByUser(user)
	}


return (
	<WishContext.Provider value={{ 
        wish,
        addwWishList,
		deleteWishProduct,
        getWishesByUser
	}}>
		{children}
	</WishContext.Provider>
);
};