import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { simpleReducer } from './slice/simpleSlice'


const rootReducer = combineReducers({
  simple: simpleReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(),
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch