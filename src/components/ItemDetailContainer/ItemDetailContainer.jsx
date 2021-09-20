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

    const [product, setProduct] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const { id } = useParams()

    const getProduct = async (id) => {
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)
        let prdId = {}

        if(docSnap.exists()) { 
            prdId = docSnap.id
            setProduct({...docSnap.data(), id:prdId})
            setIsVisible(true)
        } else {
            alert('ocurrió un error')
        }
    }

    useEffect(() => {
        getProduct(id)
    }, [id])

    return (
        <div className='detail-container'>
            {isVisible === false ?  <Spinner animation="grow" /> : <ItemDetail product={product}/> }
        </div>
    )
}

export default ItemDetailContainer
