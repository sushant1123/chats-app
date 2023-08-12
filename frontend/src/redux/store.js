import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";

import { rootPersistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistedStore = persistStore(store);

const { dispatch } = store;
const { useDispatch } = useAppDispatch;
const { useSelector } = useAppSelector;

export { store, persistedStore, dispatch, useSelector, useDispatch };
