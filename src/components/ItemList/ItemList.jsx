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

    const getProducts = async (id) => {
        const docs = []
        let  q = {}

        if (id === undefined) {
            q = query(collection(db, 'products'))
        }else {
            q = query(collection(db, 'products'), where('categoryId', '==', id))
        }

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
        setProducts(docs)
    }

    useEffect(() => {
        getProducts(catId)
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
