import React, { useEffect } from 'react'
// WishContext
import { useWishContext } from '../../../context/WishContext'
// Components
import WishItem from './WishItem'

const WishList = ({ userInfo }) => {

    const { getWishesByUser, wish } = useWishContext()

    useEffect(() => {
        getWishesByUser(userInfo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                wish.length > 0 ? 
                <div className='wish-container'>
                    <h2 style={{color:"rgba(28,105,181,1)", userSelect:"none"}}>Productos Guardados</h2>
                    {wish.map((wish) => {
                        return(
                            <WishItem wish={wish}  key={wish.id} />
                        )
                    })}
                </div>
                :
                <>
                    <h2 style={{color:"rgba(28,105,181,1)", userSelect:"none"}}>El usuario no posee productos en la lista de deseos</h2>
                </>
            }
        </>
    )
}

export default WishList
