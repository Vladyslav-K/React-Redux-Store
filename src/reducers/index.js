import updateCartList from './update-cart-list';
import updateKahonList from './update-kahon-list'

const reducer = (state, action) => {
  return {
    kahonList: updateKahonList(state, action),
    cartList: updateCartList(state, action)
  };
};

export default reducer;