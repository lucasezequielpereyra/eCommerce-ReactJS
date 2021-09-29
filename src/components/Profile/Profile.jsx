import React, { useState } from 'react'
// Bootstrap
import { Button } from 'react-bootstrap'
// Components 
import OrdersList from './Orders/OrdersList'
import WishList from './Wishes/WishList'
// AUTH0
import { useAuth0 } from '@auth0/auth0-react'
// Styles
import './Profile.css'

const Profile = () => {

    const { user } = useAuth0()

    const [buttonOrdersClicked, setButtonOrdersClicked] = useState(false)
    const [buttonWishesClicked, setbuttonWishesClicked] = useState(false)
    

    const handleButtonOrdersClick = () => {
        setButtonOrdersClicked(!buttonOrdersClicked)
        setbuttonWishesClicked(false)
    }

    const handleButtonWishesClick = () => {
        setbuttonWishesClicked(!buttonWishesClicked)
        setButtonOrdersClicked(false)
    }
    
    return (
        <div className='profile-container'>
            <div className='header' style={{marginTop:"1rem"}}>
                <h1>Bienvenido <span style={{"color":"rgba(28,105,181,1)"}}>{user.given_name}</span>! </h1>
                <Button className='button-profile' onClick={() => handleButtonOrdersClick()}>Mis Compras</Button>
                <Button className='button-profile' onClick={() => handleButtonWishesClick()}>Mi Lista</Button>
            </div>
            { buttonOrdersClicked && <OrdersList userInfo={ user } /> }
            { buttonWishesClicked && <WishList userInfo={ user } /> }
        </div>
    )
}

export default Profile
