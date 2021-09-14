import React, { useEffect, useState } from 'react'
// React Router
import { useParams } from 'react-router-dom'
// Components
import ItemDetail from '../ItemDetail/ItemDetail';
// Bootstrap
import { Spinner } from 'react-bootstrap'
// Firebase
import { db } from '../../firebase'
import {
    doc,
    getDoc
} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const { id } = useParams()

    const getProduct = async (id) => {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)
        let prdId = {}

        if(docSnap.exists()) { 
            setIsVisible(true)
            prdId = docSnap.id
            setProducto({...docSnap.data(), id:prdId})
        } else {
            alert('ocurrió un error')
        }
    }

    useEffect(() => {
        getProduct(id)
    }, [id])
    return (
        <div>
            {isVisible === false ?  <Spinner animation="grow" /> : <ItemDetail producto={producto}/> }
        </div>
    )
}

export default ItemDetailContainer
