import React, { useState, useEffect} from 'react'
// Firebase
import { db } from '../../../firebase'
import { 
	collection, 
	query, 
	getDocs, 
	where,
} from "firebase/firestore"
// Components
import OrderItem from './OrderItem'

const OrdersList = ({userInfo}) => {
    const [ordersByUser, setOrdersByUser] = useState([])

    useEffect(() => {
        const getOrdersByUser = async () => {
            const docs = []
            const q = query(collection(db, 'orders'), where('buyer.id', '==', userInfo.sub))
    
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setOrdersByUser(docs)
        }
        getOrdersByUser()
    }, [userInfo.sub])

    return (
        <>
            {
                ordersByUser.length > 0 ? 
                <div style={{marginBottom:"3rem"}}>
                    {ordersByUser.map((ord) => {
                        return(
                            <OrderItem ord={ord.items} date={ord.date} total={ord.total} key={ord.id} />
                        )
                    })}
                </div>
                :
                <>
                    <h2 style={{color:"rgba(28,105,181,1)", userSelect:"none"}}>El usuario no tiene compras</h2>
                </>
            }
        </>
    )
}

export default OrdersList
