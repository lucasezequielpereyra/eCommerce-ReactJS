import React, {useEffect, useState} from 'react'
import { ListaProductos } from '../../data/productos';
import './ItemList.css'
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap'

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ListaProductos)
            }, 2000)
        })

        prom.then((resultado) => {
            setProductos(resultado);
        })
    }, [])  

    return (
        <div className='productos-container container-lg'>
            {
                productos.length === 0 ? <Spinner animation="grow" /> : 
                productos.map((prd) => {
                    return(
                        <Item producto={prd} />
                    )
                })
            }
        </div>
    )
}

export default ItemList
