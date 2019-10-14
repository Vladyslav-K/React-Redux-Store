import updateCartList from './update-cart-list';
import updateCajonList from './update-cajon-list';

const reducer = (state, action) => {
  return {
    cajonList: updateCajonList(state, action),
    cartList: updateCartList(state, action)
  };
};

export default reducer;