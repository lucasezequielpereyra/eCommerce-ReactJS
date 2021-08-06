import React from 'react'
import './ItemListConteiner.css'


const ItemListConteiner = (props) => {
    return (
        <div className='items-conteiner'>
            <h5>{props.title}</h5>
            <p>{props.descr}</p>
        </div>
    )
}

export default ItemListConteiner
