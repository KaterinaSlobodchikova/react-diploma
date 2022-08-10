import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./books";
import cartReducer from "./cart";
import userReducer from "./user";

const rootReducer = combineReducers({
  books: booksReducer,
  cartReducer,
  user: userReducer,
});

export default rootReducer;
