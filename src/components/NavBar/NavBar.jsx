import React from 'react'
// Bootstrap
import { Nav } from 'react-bootstrap';
// React Router
import { NavLink  } from 'react-router-dom'
// AUTH0
import { useAuth0 } from "@auth0/auth0-react"
// Components
import CartWidget from '../CartWidget/CartWidget'
// Styles
import logo from './logo.png'
import './NavBar.css'


const NavBar = () => {
    const { isAuthenticated } = useAuth0()

    const viewLogIn = () => {
        return(
            <>
                <Nav.Item className='nav-item'> 
                    <NavLink className='nav-link' to="/login">LOGIN</NavLink>
                </Nav.Item>
            </>
        )
    } 

    const viewLogOut = () => {
        return(
            <>
                <Nav.Item className='nav-item'> 
                    <NavLink className='nav-link' to="/profile">PERFIL</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-item'> 
                    <NavLink className='nav-link' to="/logout">LOGOUT</NavLink>
                </Nav.Item>
            </>
        )
    } 

    return (
        <div className='header-container'>
            <div className="logo">
                <NavLink to='/'><img className="logo-img" src={logo} alt="Logo BUYCO" /></NavLink>
            </div>

            <Nav className='justify-content-end'>
                <Nav.Item className='nav-item'>
                    <NavLink className='nav-link' to="/">Inicio</NavLink>
                </Nav.Item>
                {
                    isAuthenticated ?  viewLogOut() : viewLogIn()
                }
                <CartWidget />
            </Nav>
            
        </div>
    )
}

export default NavBar;