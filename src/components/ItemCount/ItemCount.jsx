import React, { useState } from 'react'
// Icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// Bootstrap
import { Button } from 'react-bootstrap';
// Styles
import './ItemCount.css'

const  ItemCount = ({product, onAdd}) => {
    const [count, setCount] = useState(1);

    const handleIncrement = (max) => {
        count < max ? setCount(count+1) : alert('Cantidad Maxima Superada');
    }

    const handleDecrement = () => {
        count > 0 ? setCount(count-1) : alert('Cantidad Minima Superada');
    }

    return (
        <>
            <span className='contador-container'>
                <AiOutlineMinus className='buttonMinus' onClick={() => handleDecrement()} />
                {count}
                <AiOutlinePlus className='buttonPlus' onClick={() => handleIncrement(product.stock)} />
                <Button variant="secondary" onClick={() => onAdd(count)}>Agregar</Button>
            </span>
        </>
    )
}

export default ItemCount