const updateCartItems = (cartItems, item, index) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ];
  };

  if (index === -1) {
    return [
      ...cartItems,
      item
    ];
  };

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ];
};

const updateCartItem = (kahon, item = {}, amount) => {

  const {
    id = kahon.id,
    title = kahon.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + amount,
    total: total + amount * kahon.price
  };
};

const updateOrder = (state, kahonId, amount) => {

  const { kahonList: { kahons }, cartList: { cartItems } } = state;

  const kahon = kahons.find(({ id }) => id === kahonId);
  const itemIndex = cartItems.findIndex(({ id }) => id === kahonId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(kahon, item, amount);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateCartList = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  };

  switch (action.type) {

    case 'KAHON_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'KAHON_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_KAHONS_REMOVED_FROM_CART':
      const item = state.cartList.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.cartList;
  };
};

export default updateCartList;