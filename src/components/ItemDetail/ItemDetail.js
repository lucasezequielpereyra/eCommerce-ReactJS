import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(0);
    
    const { agregarProducto } = useCartContext();

    const onAdd = (valor) => {
        if (valor > 0 ) { 
            setCount(valor)
            agregarProducto(producto, valor)
        } else {
            alert("Debe ingresar una cantidad mayor a 0")
        }
    };

    return (
        <div className="item-producto container-lg">
            <Card style={{ width: "45rem", margin: "1rem" }}>
                <Card.Title className="item-name">{producto.name}</Card.Title>
                <Card.Img
                    className="img-detail"
                    variant="top"
                    src={producto.pictureUrl}
                />
                <Card.Body>
                    <Card.Text>
                        <span className="description-span">
                            <span>{producto.description}</span>
                        </span>
                        <span className="stock-span">
                            {`STOCK: ${producto.stock - count}`}
                        </span>
                        <span>
                            {count === 0 ? (
                                <ItemCount producto={producto} onAdd={onAdd} />
                            ) : (
                                <Link to="/cart">
                                    <Button variant="secondary" style={{ margin: "1rem" }}>
                                        Terminar Compra
                                    </Button>
                                </Link>
                            )}
                        </span>
                        <span className="price-span">${producto.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

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
