import { connect } from 'react-redux';
import CartPage from './CartPage';
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from '../redux/actions';

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: id => dispatch(addItemToCart(id)),
    onDecrease: id => dispatch(removeItemFromCart(id)),
    onRemove: id => dispatch(removeProductFromCart(id)),
  };
};

const CartPageHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);

export default CartPageHandler;
