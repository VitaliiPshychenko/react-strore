import { connect } from 'react-redux';
import ProductsPage from './ProductsPage';
import { addItemToCart } from '../redux/actions';

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedToCart: id => dispatch(addItemToCart(id)),
  };
};

const ProductsPageHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);

export default ProductsPageHandler;
