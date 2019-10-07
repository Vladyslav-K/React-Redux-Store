const kahonsRequested = () => {
  return {
    type: 'FETCH_KAHONS_REQUEST'
  };
};

const kahonsLoaded = (newKahons) => {
  return {
    type: 'FETCH_KAHONS_SUCCESS',
    payload: newKahons
  };
};



const kahonsError = (error) => {
  return {
    type: 'FETCH_KAHONS_FAILURE',
    payload: error
  };
};

const fetchBooks = (kahonsService, dispatch) => () => {
  dispatch(kahonsRequested());
  kahonsService.getKahons()
    .then((data) => dispatch(kahonsLoaded(data)))
    .catch((error) => dispatch(kahonsError(error)));
};

const kahonAddedToCart = (kahonId) => {
  return {
    type: 'KAHON_ADDED_TO_CART',
    payload: kahonId
  };
};

export {
  fetchBooks,
  kahonAddedToCart
};
