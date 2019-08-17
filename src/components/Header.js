import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Navbar.Brand>
        <Link className="logo" to="/">
          React store
        </Link>
      </Navbar.Brand>

      <Nav className="main-nav">
        <Link className="home-btn" to="/products">
          Products
        </Link>
        <Link className="cart" to="/cart" />
      </Nav>
    </Navbar>
  );
};

export default Header;
