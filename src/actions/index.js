const kahonsLoaded = (newKahons) => {
  return {
    type: 'KAHONS_LOADED',
    payload: newKahons
  }
}

export {
  kahonsLoaded
}