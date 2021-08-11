import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Button } from 'react-bootstrap';



const  ItemCount = ({producto}) => {
    const [count, setCount] = useState(0);

    const agregar = (maximo) => {
        count < maximo ? setCount(count+1) : alert('Cantidad Maxima Superada');
    }

    const quitar = () => {
        count > 0 ? setCount(count-1) : alert('Cantidad Minima Superada');
    }

    const onAdd = (articulo) => {
        alert(`Ud. Agrego ${count} unidades del producto ${articulo}`);
    }

    return (
        <div>
            <p>
                Cantidad: <AiOutlineMinus onClick={() => quitar()} />
                <span className='contador' >{`${count}`}</span>
                <AiOutlinePlus onClick={() => agregar(producto.stock)} />
            </p>
            <Button variant="secondary" onClick={() => onAdd(producto.nombre)}>Agregar</Button>
        </div>
    )
}

export default ItemCount