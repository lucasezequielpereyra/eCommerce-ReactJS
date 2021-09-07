import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Button } from 'react-bootstrap';

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