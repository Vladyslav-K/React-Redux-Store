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

const updateCartItem = (cajon, item = {}, amount) => {

  const {
    id = cajon.id,
    title = cajon.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + amount,
    total: total + amount * cajon.price
  };
};

const updateOrder = (state, cajonId, amount, itemTotal) => {

  const { cajonList: { cajons }, cartList: { cartItems, orderTotal } } = state;

  const cajon = cajons.find(({ id }) => id === cajonId);
  const itemIndex = cartItems.findIndex(({ id }) => id === cajonId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(cajon, item, amount);
  let sum = 0;
  if (amount === -1) {
    sum = orderTotal - cajon.price
  } else if (amount === 1) {
    sum = cajon.price + orderTotal
  } else {
    sum = orderTotal - itemTotal
  }

  return {
    orderTotal: sum,
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

    case 'CAJON_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'CAJON_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_CAJONS_REMOVED_FROM_CART':
      const item = state.cartList.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count, item.total);

    default:
      return state.cartList;
  };
};

export default updateCartList;