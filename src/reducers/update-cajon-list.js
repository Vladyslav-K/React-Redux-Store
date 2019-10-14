const updateCajonList = (state, action) => {

  if (state === undefined) {
    return {
      cajons: [],
      loading: true,
      error: null,
    };
  };

  switch (action.type) {

    case 'FETCH_CAJONS_REQUEST':
      return {
        cajons: [],
        loading: true,
        error: null
      };

    case 'FETCH_CAJONS_SUCCESS':
      return {
        cajons: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CAJONS_FAILURE':
      return {
        cajons: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.cajonList;
  };
};

export default updateCajonList;