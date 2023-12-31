import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { myContext } from "../Context";
import { Link, NavLink } from "react-router-dom";
export default function Products(props) {
  const { addProductToCart } = useContext(myContext);
  const { id, title, price, imageUrl } = props.data;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={() => addProductToCart(id)}>
          Add To Cart
        </Button>
      </Card.Body>
      <NavLink to={`/3hrreactproject/productdetail/${id}`}>
        Product Details
      </NavLink>
    </Card>
  );
}
