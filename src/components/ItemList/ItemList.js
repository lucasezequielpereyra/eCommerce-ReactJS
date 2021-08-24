import React, { useEffect, useState } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios('http://localhost:4000/products').then((res) =>
                setProductos(res.data)
            );
        }, 2000)
    }, [])

    return (
        <div className='productos-container container-lg'>
            {
                productos.length === 0 ? <Spinner className='container-lg' animation="grow" /> : productos.map((prd) => {
                    return (
                        <Item producto={prd} key={prd.id}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList
