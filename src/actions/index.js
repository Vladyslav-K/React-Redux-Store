const cajonsRequested = () => {
  return {
    type: 'FETCH_CAJONS_REQUEST'
  };
};

const cajonsLoaded = (newCajons) => {
  return {
    type: 'FETCH_CAJONS_SUCCESS',
    payload: newCajons
  };
};



const cajonsError = (error) => {
  return {
    type: 'FETCH_CAJONS_FAILURE',
    payload: error
  };
};

const fetchCajons = (cajonsService, dispatch) => () => {
  dispatch(cajonsRequested());
  cajonsService.getCajons()
    .then((data) => dispatch(cajonsLoaded(data)))
    .catch((error) => dispatch(cajonsError(error)));
};

const cajonAddedToCart = (cajonId) => {
  return {
    type: 'CAJON_ADDED_TO_CART',
    payload: cajonId
  };
};

const cajonRemovedFromCart = (cajonId) => {
  return {
    type: 'CAJON_REMOVED_FROM_CART',
    payload: cajonId
  };
};

const allCajonsRemovedFromCart = (cajonId) => {
  return {
    type: 'ALL_CAJONS_REMOVED_FROM_CART',
    payload: cajonId
  };
};

export {
  fetchCajons,
  cajonAddedToCart,
  cajonRemovedFromCart,
  allCajonsRemovedFromCart
};
