import React from 'react'
// Styles
import './category.css'

export const Category = ({ category }) => {
  return (
    <div className='category'>
      - {category.name}
    </div>
  )
}

export default Category