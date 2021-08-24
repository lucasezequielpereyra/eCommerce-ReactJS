import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Item = ({producto}) => {

    const [ver, setVer] = useState(0);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true)
    }

    return (
        <div className='item-producto' onClick={() => {setVer(1)}}>
            <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Text>
                        <span>
                            Precio: ${producto.price}
                        </span>
                    </Card.Text>
                    {show === false ? <Button>Ver Mas</Button> : null }
                </Card.Body>
                {ver === 1 ? <ItemDetailContainer productId={producto.id} setShow={handleShow} /> : null}

            </Card>
        </div>
    )
}

export default Item
