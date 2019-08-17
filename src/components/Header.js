import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Navbar.Brand>React store</Navbar.Brand>
      <Link className="cart" to="/cart" />
    </Navbar>
  );
};

export default Header;
