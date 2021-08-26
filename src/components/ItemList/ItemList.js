import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css'
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'

const ItemList = ({ catId }) => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            console.log(catId)
            catId === undefined ? 
            axios(`http://localhost:4000/products`).then((res) =>
                setProductos(res.data)
            )
            :
            axios(`http://localhost:4000/products/?categoryId=${catId}`).then((res) =>
                setProductos(res.data)
            )
        }, 500)
    }, [catId])

    return (
        <div className='productos-container container-lg'>
            {
                productos.length === 0 ? <Spinner className='container-lg' animation="grow" /> : productos.map((prd) => {
                    return (
                        <Link key={prd.id} className='link' to={`/product/${prd.id}`}>
                            <Item producto={prd} key={prd.id} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ItemList
