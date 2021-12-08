import * as ACTION_TYPES from '../actions/actions.types';

const initialState = {
  stateprop1: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        stateprop1: true
      }
    case ACTION_TYPES.FAILURE:
      return {
        stateprop1: false
      }
    default: 
      return state;
  }
}

export default rootReducer;
