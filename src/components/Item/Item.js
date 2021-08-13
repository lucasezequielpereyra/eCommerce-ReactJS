import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'

const Item = ({producto}) => {
    return (
        <div className='item-producto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        <span>
                            Precio: ${producto.price}
                        </span>
                        <span>
                            Stock: {producto.stock}
                        </span>
                        <span>
                            Categoria: {producto.category}
                        </span>
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
