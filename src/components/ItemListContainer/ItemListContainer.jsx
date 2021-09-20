import React from 'react'
// React Router
import { useParams } from 'react-router-dom'
// Components
import CategoriesList from '../CategoriesList/CategoriesList'
import ItemList from '../ItemList/ItemList'


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
