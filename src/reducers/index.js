const initialState = {
  kahons: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 350
};

const updateCartItems = (cartItems, item, index) => {

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

const updateCartItem = (kahon, item = {}) => {

  const {
    id = kahon.id,
    title = kahon.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + kahon.price
  };
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_KAHONS_REQUEST':
      return {
        ...state,
        kahons: [],
        loading: true,
        error: null
      };

    case 'FETCH_KAHONS_SUCCESS':
      return {
        ...state,
        kahons: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_KAHONS_FAILURE':
      return {
        ...state,
        kahons: [],
        loading: false,
        error: action.payload
      };

    case 'KAHON_ADDED_TO_CART':
      const kahonId = action.payload;
      const kahon = state.kahons.find((kahon) => kahon.id === kahonId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === kahonId);
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(kahon, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };

    default:
      return state;
  };
};

export default reducer;
