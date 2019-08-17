import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const CartPage = props => {
  const { cartItems, onIncrease, onDecrease, onRemove } = props;
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => {
            const { title, price, count, id } = item;

            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="mr-1"
                    onClick={() => onDecrease(id)}
                  >
                    -
                  </Button>
                  {count}
                  <Button
                    variant="primary"
                    className="ml-1"
                    onClick={() => onIncrease(id)}
                  >
                    +
                  </Button>
                </td>
                <td>{price}</td>
                <td>
                  <Button variant="danger" onClick={() => onRemove(id)}>
                    &times;
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p>Total: {total}</p>
    </Container>
  );
};

export default CartPage;
