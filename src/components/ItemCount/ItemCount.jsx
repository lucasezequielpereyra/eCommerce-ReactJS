import React, { useState } from 'react'
// Icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// Bootstrap
import { Button } from 'react-bootstrap';
// Cart Context
import { useWishContext } from '../../context/WishContext';
// Sweet Alert
import swal from 'sweetalert';
// Styles
import './ItemCount.css'

const ItemCount = ({ product, onAdd, isAuthenticated, userInfo }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = (max) => {
        count < max ? setCount(count + 1) :
            swal({
                title: "Error",
                text: `Cantidad maxima de productos superada!`,
                icon: "error",
                button: "Volver",
            })
    }

    const handleDecrement = () => {
        count > 1 ? setCount(count - 1) :
            swal({
                title: "Error",
                text: `Cantidad minima de productos superada!`,
                icon: "error",
                button: "Volver",
            })
    }

    const { addwWishList } = useWishContext()

    return (
        <>
            <span className='contador-container'>
                <AiOutlineMinus className='buttonMinus' onClick={() => handleDecrement()} />
                {count}
                <AiOutlinePlus className='buttonPlus' onClick={() => handleIncrement(product.stock)} />
                {
                    product.stock === 0 ? <Button className='custom-btn' disabled>Agregar</Button>
                        :
                        <Button className='custom-btn' onClick={() => onAdd(count)}>Agregar</Button>
                }

                {
                    isAuthenticated && <Button variant="secondary" onClick={() => addwWishList(userInfo.sub, product)}>Agregar a Lista</Button>
                }
            </span>
        </>
    )
}

export default ItemCount