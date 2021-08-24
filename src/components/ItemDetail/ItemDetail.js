import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount' 

const ItemDetail = ({producto}) => {

    const [stock, setStock] = useState(null)
    

    const changeStock = (valorNuevo) =>{
        setStock(valorNuevo)
    }

    // Nota para la tutotra: jajaja
    // Tuve que usar operador ternario para que solo me muestr el nuevo stock una vez modificado el estado
    // Porque no me deja hacer useState(producto.stock), no muesta el stock correctamente, me volvio loco.

    return (
        <div>
            <Card.Text>
                <span>
                    {stock === null ? `Stock: ${producto.stock}` : `Stock: ${stock}` }
                </span>
                <span>
                    <span>{producto.description}</span>
                </span>
                <span>
                    <ItemCount producto={producto} setStock={changeStock}/>
                </span>
            </Card.Text>
        </div>
    )
}

export default ItemDetail
