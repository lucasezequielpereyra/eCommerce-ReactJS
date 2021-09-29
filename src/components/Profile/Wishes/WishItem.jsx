import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Icons
import { IoMdRemoveCircle } from 'react-icons/io'
// Cart Context
import { useWishContext } from '../../../context/WishContext'
// Styles
import './WishItem.css'

const WishItem = ({ wish }) => {

    const { deleteWishProduct } = useWishContext()

    return (
        <div className='wish-item container'>
            <Link to={`/product/${wish.item.id}`}>
                <img src={wish.item.pictureUrl} alt="Imagen Producto" />
            </Link>
                <span style={{ color: "rgba(28,105,181,1)", fontWeight: "bold" }}>
                <Link to={`/product/${wish.item.id}`} style={{textDecoration:"none", color:"rgba(28,105,181,1)"}}>
                    {wish.item.name}
                </Link>
                </span>
                <span>
                    u$s{wish.item.price}
                </span>
            <span>
                <button onClick={() => deleteWishProduct(wish)}>
                    <IoMdRemoveCircle size={32} color={ "rgba(28,105,181,1)" }/>
                </button>
            </span>
        </div>
    )
}

export default WishItem
