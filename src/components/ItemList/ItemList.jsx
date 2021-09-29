import React, { useEffect, useState } from 'react'
// Components
import Item from '../Item/Item'
// Bootstrap
import { Spinner } from 'react-bootstrap'
// Firebase
import { db } from '../../firebase'
import {
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore'
// Styles 
import './ItemList.css'

const ItemList = ({ catId }) => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const docs = []
        const q = query(collection(db, 'products'))

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
        setProducts(docs)
    }

    const getProductsCat = async (id) => {
        const docs = []
        const q = query(collection(db, 'products'), where('categoryId', '==', id))

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
        setProducts(docs)
    }    

    useEffect(() => {
        catId === undefined ? getProducts() : getProductsCat(catId)
    }, [catId])

    return (
        <div className='productos-container container-lg'>
            {
                products.length === 0 ? <Spinner className='container-lg' animation="grow" /> : products.map((prd) => {
                    return (
                        <Item product={prd} key={prd.id} />
                    )
                })
            }
        </div>
    )
}

export default ItemList
