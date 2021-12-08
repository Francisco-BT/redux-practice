import * as ACTION_TYPES from '../actions/actions.types';

const initialState = {
  stateprop1: false,
  userText: ''
}

const rootReducer = (state = initialState, action) => {
  console.log(JSON.stringify(state))
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true
      }
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false
      }
    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        userText: action.payload,
      }
    default: 
      return state;
  }
}

export default rootReducer;
