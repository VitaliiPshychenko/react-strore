import React from 'react';
import { Card, Button, Container, ListGroup, Col } from 'react-bootstrap';

const ProductsPage = props => {
  const { products, onAddedToCart } = props;
  return (
    <Container>
      <ListGroup className="flex-row flex-wrap">
        {products.map(product => {
          const { title, price, description, id } = product;

          return (
            <Col className="mb-2" xs={4} key={product.id}>
              <ListGroup.Item>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Price: {price}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="primary" onClick={() => onAddedToCart(id)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </ListGroup.Item>
            </Col>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default ProductsPage;
