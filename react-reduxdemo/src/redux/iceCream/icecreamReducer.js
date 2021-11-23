import { BUY_ICECREAM } from "./icecreamType";

const initialIcecreamState = {
  numOfIceCream: 50,
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default IcecreamReducer;
