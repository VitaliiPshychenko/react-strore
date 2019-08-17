import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import './App.css';
import ProductsPageHandler from './components/ProductsPagetHandler';
import CartPageHandler from './components/CartPageHandler';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={ProductsPageHandler} />
        <Route path="/cart" exact component={CartPageHandler} />
      </Router>
    </Provider>
  );
};

export default App;
