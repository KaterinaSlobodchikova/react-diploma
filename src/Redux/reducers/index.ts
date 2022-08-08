import { combineReducers, createSlice } from "@reduxjs/toolkit";

import booksReducer from "./books";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  books: booksReducer,
  cartReducer,
});

export default rootReducer;
