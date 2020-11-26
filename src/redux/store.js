import { createBrowserHistory } from "history";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const initialState = {};

const store = createStore(persistedReducer, initialState);

persistStore(store);

export default store;
