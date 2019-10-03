
const kahonsLoaded = (newKahons) => {
  return {
    type: 'KAHONS_LOADED',
    value: newKahons
  };
};

export {
  kahonsLoaded
};
