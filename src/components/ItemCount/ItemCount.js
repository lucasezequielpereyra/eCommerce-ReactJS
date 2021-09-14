import React, { useState } from 'react'
// Icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// Bootstrap
import { Button } from 'react-bootstrap';
// Styles
import './ItemCount.css'

const  ItemCount = ({producto, onAdd}) => {
    const [count, setCount] = useState(1);

    const agregar = (maximo) => {
        count < maximo ? setCount(count+1) : alert('Cantidad Maxima Superada');
    }

    const quitar = () => {
        count > 0 ? setCount(count-1) : alert('Cantidad Minima Superada');
    }

    return (
        <>
            <span className='contador-conteiner'>
                <AiOutlineMinus className='buttonMinus' onClick={() => quitar()} />
                {count}
                <AiOutlinePlus className='buttonPlus' onClick={() => agregar(producto.stock)} />
                <Button variant="secondary" onClick={() => onAdd(count)}>Agregar</Button>
            </span>
        </>
    )
}

export default ItemCount