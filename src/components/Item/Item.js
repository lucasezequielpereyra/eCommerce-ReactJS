import React from 'react'
// Bootstrap
import { Card } from 'react-bootstrap'
// React Router
import { Link } from 'react-router-dom'
// Styles
import './Item.css'


const Item = ( {producto} ) => {


    return (
        <div className='item-producto'>
            <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                <Link className='link' to={`/product/${producto.id}`}>
                    <Card.Title className='item-name'>{producto.name}</Card.Title>
                </Link>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Text>
                        <span className='price-span'>
                            ${producto.price}
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
