import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Spinner } from 'react-bootstrap'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            axios(`http://localhost:4000/products/${id}`).then((res) =>
                setProducto(res.data)
            );
            setIsVisible(true)
        }, 500);
    }, [id])
    return (
        <div>
            {isVisible === false ?  <Spinner animation="grow" /> : <ItemDetail producto={producto}/> }
        </div>
    )
}

export default ItemDetailContainer
