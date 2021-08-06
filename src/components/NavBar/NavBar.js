import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from './logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className='header-conteiner'>
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo BUYCO" />
            </div>

            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Productos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Contacto</Nav.Link>
                </Nav.Item>
                <CartWidget  />
            </Nav>
        </div>
    )
}

export default NavBar;