import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../../../Types/models/book.model";
import { RootState } from "../../store";

type InitialStateType = {
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: InitialStateType = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "bookCart",
  initialState,
  reducers: {
    setCartBooks: (state: any, action: any) => {
      const existingBook = state.cartItems.findIndex(
        (book: BookModel) => book.isbn13 === action.payload.isbn13
      );
      if (existingBook >= 0) {
        state.cartItems[existingBook] = {
          ...state.cartItems[existingBook],
          cartQuantity: state.cartItems[existingBook].cartQuantity + 1,
        };
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeBook: (state: any, action: any) => {
      const index = state.cartItems.findIndex(
        (book: BookModel) => book.isbn13 === action.payload
      );
      state.cartItems.splice(index, 1);
    },
    decreaseCart: (state: any, action: any) => {
      const bookIndex = state.cartItems.findIndex(
        (book: BookModel) => book.isbn13 === action.payload.isbn13
      );
      if (state.cartItems[bookIndex].cartQuantity > 1) {
        state.cartItems[bookIndex].cartQuantity -= 1;
      } else if (state.cartItems[bookIndex].cartQuantity === 1) {
        const index = state.cartItems.findIndex(
          (book: BookModel) => book.isbn13 === action.payload
        );
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { setCartBooks, removeBook, decreaseCart } = cartSlice.actions;

const reducer = cartSlice.reducer;

export default reducer;

export const CartSelectors = {
  getCartBooks: (state: RootState) => state.cartReducer.cartItems,
  getCartBooksWithoutRemovedBook: (state: RootState) =>
    state.cartReducer.cartItems,
};
