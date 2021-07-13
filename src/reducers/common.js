import * as commonVars from 'variables/common';

const initialState = {
  someValue: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * SET_SOMETHING
     */
    case commonVars.SET_SOMETHING:
      return {
        ...state,
        someValue: action.someValue,
      };
    default:
      return state;
  }
};
