export const ADD_ITEM_TO_CART = 'add_item_to_cart';
export const REMOVE_ITEM_FROM_CART = 'remove_item_from_cart';
export const REMOVE_PRODUCT_FROM_CART = 'remove_product_from_cart';
export const UPDATE_TOTAL_COST = 'update_total_cost';

export const addItemToCart = itemId => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: itemId,
  };
};

export const removeItemFromCart = itemId => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemId,
  };
};

export const removeProductFromCart = itemId => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: itemId,
  };
};
