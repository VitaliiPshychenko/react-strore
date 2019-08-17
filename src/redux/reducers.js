import { products } from '../products';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './actions';

const initialState = {
  products,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  const productId = action.payload;
  const product = state.products.find(item => item.id === productId);
  const itemIndex = state.cartItems.findIndex(({ id }) => id === productId);
  const productItem = state.cartItems[itemIndex];
  let newCartItem;

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      if (productItem) {
        newCartItem = {
          ...productItem,
          count: +productItem.count + 1,
          price: +productItem.price + +product.price,
        };
      } else {
        newCartItem = {
          id: product.id,
          title: product.title,
          count: 1,
          price: +product.price,
        };
      }

      if (itemIndex === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newCartItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }

    case REMOVE_ITEM_FROM_CART:
      if (productItem) {
        newCartItem = {
          ...productItem,
          count: +productItem.count - 1,
          price: +productItem.price - +product.price,
        };
      } else {
        newCartItem = {
          id: product.id,
          title: product.title,
          count: 1,
          price: product.price,
        };
      }

      if (newCartItem.count === 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }

      if (itemIndex === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newCartItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, itemIndex),
          ...state.cartItems.slice(itemIndex + 1),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
