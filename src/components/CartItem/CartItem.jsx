import React from 'react'
// Context
import { useCartContext } from "../../context/CartContext"
// Icons
import { IoMdRemoveCircle } from 'react-icons/io'
// Styles
import './CartItem.css'

const CartItem = ({ item }) => {
  const { removeProduct } = useCartContext()

  return (
    <div className='cart-item container'>
      <img src={item.pictureUrl} alt="Imagen Producto" />
      <span style={{ color: "rgba(28,105,181,1)", fontWeight: "bold" }}>
        {item.name}
      </span>
      <span>
        u$s{item.price}
      </span>
      <span>
        Cantidad: {item.quantity}
      </span>
      <span>
        <button onClick={() => removeProduct(item.id)}>
          <IoMdRemoveCircle size={32} color={"rgba(28,105,181,1)"} />
        </button>
      </span>
    </div>
  )
}

export default CartItem
