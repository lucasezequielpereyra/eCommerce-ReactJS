import React, { useState } from "react";
// Bootstrap
import { Card, Button } from "react-bootstrap";
// React Router
import { Link } from "react-router-dom";
// PropTypes
import PropTypes from "prop-types";
// Context
import { useCartContext } from "../../context/CartContext"
// AUTH0
import { useAuth0 } from '@auth0/auth0-react'
// Components
import ItemCount from "../ItemCount/ItemCount"
// Styles
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    const { user, isAuthenticated } = useAuth0()

    const [count, setCount] = useState(0)
    
    const { addProduct } = useCartContext()

    const onAdd = (valor) => {
        if (valor > 0 ) { 
            setCount(valor)
            addProduct(product, valor)
            
        } else {
            alert("Debe ingresar una cantidad mayor a 0")
        }
    }
    

    return (
        <div className="item-producto">
            <Card className='card-producto'>
                <Card.Title className="item-name">{product.name}</Card.Title>
                <Card.Img
                    className="img-detail"
                    variant="top"
                    src={product.pictureUrl}
                />
                <Card.Body>
                    <Card.Text>
                        <span className="description-span">
                            <span>{product.description}</span>
                        </span>
                        <span className="stock-span">
                            {`STOCK: ${product.stock - count}`}
                        </span>
                        <span>
                            {count === 0 ? (
                                <ItemCount product={product} onAdd={onAdd} isAuthenticated={isAuthenticated} userInfo={user} />
                            ) : (
                                <>
                                    <Link to="/">
                                        <Button  style={{ margin: "1rem", backgroundColor:"rgba(28,105,181,1)" }}>
                                            Seguir Comprando
                                        </Button>
                                    </Link>
                                    <Link to="/cart">
                                        <Button variant="secondary" style={{ margin: "1rem" }}>
                                            Terminar Compra
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </span>
                        <span className="price-span">${product.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

// PropTypes
ItemDetail.propTypes = {
    producto: PropTypes.shape({
        name: PropTypes.string,
        pictureUrl: PropTypes.string,
        description: PropTypes.string,
        stock: PropTypes.number,
        price: PropTypes.number,
    }),
};

export default ItemDetail;
