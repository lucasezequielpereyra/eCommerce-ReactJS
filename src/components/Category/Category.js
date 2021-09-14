import React from 'react'
// Styles
import './category.css'

export const Category = ({categoria}) => {
    return (
        <div className='category'>
            - {categoria.name}
        </div>
    )
}

export default Category