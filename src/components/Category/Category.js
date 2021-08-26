import React from 'react'
import './category.css'

export const Category = ({categoria}) => {
    return (
        <div className='category'>
            - {categoria.name}
        </div>
    )
}

export default Category