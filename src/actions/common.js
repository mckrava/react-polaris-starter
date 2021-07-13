import * as commonVars from 'variables/common';

export const setSomething = shopInfo => {
  return {
    type: commonVars.SET_SOMETHING,
    shopInfo,
  };
};

export const fetchSomething = () => {
  return async (dispatch, getStore) => {
    try {
      const { common } = getStore();
      dispatch(true);
    } catch (e) {
      console.log(e);
    }
  };
};
