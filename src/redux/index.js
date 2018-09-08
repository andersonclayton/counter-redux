import { createStore, combineReducers, applyMiddleware, compose
} from "redux";

//actions
export const INCREMENT = "INCREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

//reducers
function counter(state = 10, action) {
  switch (action.type) {
    case INCREMENT: return state + 1
    default:
      return state;
  }
}
const reducers = combineReducers({
  counter
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store
