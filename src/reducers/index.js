const initialState = {
  kahons: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'KAHONS_LOADED':
      return {
        kahons: action.payload
      }
    default:
      return state
  }

}

export default reducer