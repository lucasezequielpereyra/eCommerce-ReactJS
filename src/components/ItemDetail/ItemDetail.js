import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

    const [stock, setStock] = useState(null)


    const changeStock = (valorNuevo) => {
        setStock(valorNuevo)
    }

    return (
        <div className='item-producto container-lg'>
            <Card style={{ width: '45rem', margin: '1rem' }}>
                <Card.Title className='item-name'>{producto.name}</Card.Title>
                <Card.Img className='img-detail' variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Text>
                        <span className='description-span'>
                            <span>{producto.description}</span>
                        </span>
                        <span className='stock-span'>
                            {stock === null ? `Stock: ${producto.stock}` : `Stock: ${stock}`}
                        </span>
                        <span>
                            <ItemCount producto={producto} setStock={changeStock} />
                        </span>
                        <span className='price-span'>
                            ${producto.price}
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
