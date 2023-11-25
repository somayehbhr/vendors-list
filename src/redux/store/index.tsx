import { configureStore } from "@reduxjs/toolkit";
import { vendorsReducer } from "@/redux/store/vendors";
import { counterSlice } from "@/redux/store/counter";

/**
 * `store` is a Redux store that combines the `vendorsReducer` and `counterSlice` reducers.
 *
 * @example
 * import { store } from "@/redux/store";
 * const state = store.getState();
 *
 * @description
 * This store is created using the `configureStore` function from Redux Toolkit.
 * The `reducer` field in the configuration object passed to `configureStore` is an object that maps the names of different slices of the state to their respective reducers.
 * In this case, the `vendors` slice is managed by the `vendorsReducer` and the `pageNumber` slice is managed by the `counterSlice`.
 *
 * The `store` is exported and can be used in any part of the application that needs access to the Redux state or needs to dispatch actions.
 */
export const store = configureStore({
  reducer: {
    vendors: vendorsReducer.reducer,
    pageNumber: counterSlice.reducer,
  },
});
