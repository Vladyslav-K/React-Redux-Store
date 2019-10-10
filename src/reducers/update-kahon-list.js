const updateKahonList = (state, action) => {

  if (state === undefined) {
    return {
      kahons: [],
      loading: true,
      error: null,
    };
  };

  switch (action.type) {

    case 'FETCH_KAHONS_REQUEST':
      return {
        kahons: [],
        loading: true,
        error: null
      };

    case 'FETCH_KAHONS_SUCCESS':
      return {
        kahons: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_KAHONS_FAILURE':
      return {
        kahons: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.kahonList;
  };
};

export default updateKahonList;