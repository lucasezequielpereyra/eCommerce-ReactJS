import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemListConteiner = ({productos}) => {
    return (
        <div className='productos-container'>
            <div className="producto">
                <h3 className="title">{productos[0].nombre}</h3>
                <h6 className="stock">Stock: {productos[0].stock}</h6>
                <ItemCount producto={productos[0]} />
            </div>

            <div className="producto">
                <h3 className="title">{productos[1].nombre}</h3>
                <h6 className="stock">Stock: {productos[1].stock}</h6>
                <ItemCount producto={productos[1]} />
            </div>
        </div>
    )
}

export default ItemListConteiner
