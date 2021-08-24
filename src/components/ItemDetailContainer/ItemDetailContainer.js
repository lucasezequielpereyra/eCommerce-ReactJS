import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from 'react-bootstrap'


const ItemDetailContainer = ({ productId, setShow }) => {

    const [producto, setProducto] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            getProductos()
            setIsVisible(true)
            setShow()
        }, 2000);
    })

    const getProductos = async () => {
        let res = await axios(`http://localhost:4000/products/${productId}`)
        setProducto(res.data);
    }

    return (
        <div>
            {isVisible === false ?  <Spinner animation="grow" /> : <ItemDetail producto={producto}/> }
        </div>
    )
}

export default ItemDetailContainer
