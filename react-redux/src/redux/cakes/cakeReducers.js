import { BUY_CAKE } from "./cakesType";
const intialState = {
  numOfCake: 10,
};
const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    default: return state
  }
};

export default cakeReducer