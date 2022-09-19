import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer.redux";

const middleWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
