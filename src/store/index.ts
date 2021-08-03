import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { userReducer } from "./user/reducer";
import actionMiddleware from "./middleware/actionMiddleware";

const rootReducer = combineReducers({
  user: userReducer
});

export type ReduxStoreState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middlewares = [thunkMiddleware, actionMiddleware];
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store;
}

export default configureStore;