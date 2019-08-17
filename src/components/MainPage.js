import React from 'react';
import ProductsPageHandler from './ProductsPagetHandler';
import CartPageHandler from './CartPageHandler';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';

const MainPage = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPageHandler} />
        <Route path="/cart" exact component={CartPageHandler} />
      </Router>
    </>
  );
};

export default MainPage;
