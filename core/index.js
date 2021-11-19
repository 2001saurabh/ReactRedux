const redux = require("redux");

const createStore = redux.createStore;
console.log("hii");

// action
const BUY_CAKE = "BUY_CAKE";

//action creator
function buy() {
  // action
  return {
    // properties which defines what to do with states of store
    type: BUY_CAKE,
    info: "first redux",
  };
}

const initialState = {
  numOfCakes: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1, // retruning new object not state object
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("upadated state", store.getState());
});

store.dispatch(buy());
store.dispatch(buy());
store.dispatch(buy());

unsubscribe();
