import { ADD_COUNTER_ONE, ADD_COUNTER_TWO } from './type';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COUNTER_ONE:
      return {
        ...state,
        counterOne: state.counterOne + 1
      };
    case ADD_COUNTER_TWO:
      return {
        ...state,
        counterTwo: state.counterTwo + 1
      };
    default:
      return state;
  }
};

export default reducer;
