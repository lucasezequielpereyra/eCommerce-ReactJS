import React, { useState, useEffect } from 'react'
// React Router
import { Link } from 'react-router-dom'
// Components 
import Category from '../Category/Category'
import { db } from '../../firebase'
import {
  collection,
  query,
  getDocs
} from 'firebase/firestore'
// Styles
import './CategoryList.css'

const CategoriesList = () => {

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const docs = []
    const q = query(collection(db, 'categories'))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id })
    })
    setCategories(docs)
  }

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div className='categories-container'>
      <h3>Categorias </h3>
      {
        categories.map((cat) => {
          return (
            <Link key={cat.id} className='link' to={`/category/${cat.key}`}>
              <Category category={cat} key={cat.id} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default CategoriesList
