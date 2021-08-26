import React from 'react'
import ItemList from '../ItemList/ItemList'
import CategoriesList from '../CategoriesList/CategoriesList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const { id } = useParams()
    let catId = id

    return (
        <div className='productos-container container-lg'>
            <CategoriesList />
            <ItemList catId={catId}/>
        </div>
    )
}

export default ItemListContainer
