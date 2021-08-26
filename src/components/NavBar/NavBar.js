import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink  } from 'react-router-dom'
import './NavBar.css';


const NavBar = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <NavLink to='/'><img className="logo-img" src={logo} alt="Logo BUYCO" /></NavLink>
            </div>

            <Nav>
                <Nav.Item className='nav-link'>
                    <NavLink className='nav-link' to="/">Inicio</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-link'>
                    <NavLink className='nav-link' to="/about">Nosotros</NavLink>
                </Nav.Item>
                <Nav.Item className='nav-link'> 
                    <NavLink className='nav-link' to="/contact">Contacto</NavLink>
                </Nav.Item>
                <CartWidget />
            </Nav>
        </div>
    )
}

export default NavBar;