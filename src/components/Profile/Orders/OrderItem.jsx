import React from 'react'
// Styles
import './OrderItem.css'

const OrderItem = ( {ord, date, total} ) => {
    let fecha = date.toDate().toString()
    return (
        <>
            <span className="fecha">{fecha}</span>
            {ord.map((ord)=> {
                return (
                    <div className='order-item container' key={ord.id}>
                        <img src={ord.pictureUrl} alt="Imagen Producto" />
                        <span style={{color:"rgba(28,105,181,1)", fontWeight:"bold" }}>
                            {ord.name}
                        </span>
                        <span>
                            u$s{ord.price}
                        </span>
                        <span>
                            Cantidad: {ord.quantity}
                        </span>
                    </div>
                )
            })}
            <span className='total'>
                Total Compra: u$s{total}
            </span>
        </>
    )
}

export default OrderItem
