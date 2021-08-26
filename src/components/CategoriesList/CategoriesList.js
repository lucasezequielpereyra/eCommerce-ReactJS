import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Category  from '../Category/Category'
import './CategoryList.css'

const CategoriesList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios('http://localhost:4000/categories').then((res) =>
            setCategories(res.data)
            );
        }, 500)
    }, [])


    return (
        <div className='categories-container'>
            <h3>Categorias </h3>
            {
                categories.map((cat) =>  {
                    return(
                        <Link key={cat.id} className='link' to={`/category/${cat.id}`}>
                            <Category categoria={cat} key={cat.id} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CategoriesList
