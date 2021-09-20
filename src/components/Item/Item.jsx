import React from 'react'
// Bootstrap
import { Card } from 'react-bootstrap'
// React Router
import { Link } from 'react-router-dom'
// Styles
import './Item.css'


const Item = ( {product} ) => {


    return (
        <div className='item-producto'>
            <Link className='link' to={`/product/${product.id}`}>
                <Card style={{ width: '20rem', marginBottom: '1rem' }} >
                    <Card.Title className='item-name'>{product.name}</Card.Title>
                    <Card.Img variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Text>
                            <span className='price-span'>u$s {product.price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default Item
