// import modules
const redux = require("redux");
const reduxLogger = require("redux-logger");

//create uitilities
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; // to combine multiple reducer and make one to create store
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator
function buyCake() {
  // action
  return {
    // properties which defines what to do with states of store
    type: BUY_CAKE,
  };
}

function buyIcecream() {
  return { type: BUY_ICECREAM };
}

// const initialState = {
//   numOfCakes: 20,
//   numOfIceCream: 50,
// };

const initialCakeState = {
  numOfCakes: 20,
};

const initialIceCreamState = {
  numOfIceCream: 50,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1, // retruning new object not state object
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
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

const IcecreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1, // retruning new object not state object
      };

    default:
      return state;
  }
};

// create root reducer which call a method combineReducer
//to sum up all the reducer which take a object as parameter
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IcecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("upadated state", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
