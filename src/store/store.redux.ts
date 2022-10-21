import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import type { Middleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer, { ReduxState } from "./rootReducer.redux";

import { persistStore, persistReducer } from "redux-persist";
import type { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<ReduxState> & {
  whitelist: (keyof ReduxState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer", "categoriesReducer"],
  blacklist: ["cartReducer"]
};

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const AppStore = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(AppStore);

export type AppDispatch = typeof AppStore.dispatch;
