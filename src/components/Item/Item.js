import React from 'react'
import { Card } from 'react-bootstrap'
import './Item.css'


const Item = ({ producto }) => (
    <div className='item-producto'>
        <Card style={{ width: '20rem', marginBottom: '1rem' }}>
            <Card.Title className='item-name'>{producto.name}</Card.Title>
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

export default Item
