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
      const bookInCart = state.cartItems.find(
        (book: BookModel) => book.isbn13 === action.payload.isbn13
      );
      if (bookInCart) {
        bookInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeBook: (state: any, action: any) => {
      const index = state.cartItems.findIndex(
        (book: BookModel) => book.isbn13 === action.payload
      );
      state.cartItems.splice(index, 1);
    },
    decreaseCart: (state: any, action: any) => {
      const book = state.cartItems.find(
        (book: BookModel) => book.isbn13 === action.payload
      );
      if (book.quantity === 1) {
        book.quantity = 1;
      } else {
        book.quantity--;
      }
    },
    increaseCart: (state: any, action: any) => {
      const book = state.cartItems.find(
        (book: BookModel) => book.isbn13 === action.payload
      );
      book.quantity++;
    },
  },
});

export const { setCartBooks, removeBook, decreaseCart, increaseCart } =
  cartSlice.actions;

const reducer = cartSlice.reducer;

export default reducer;

export const CartSelectors = {
  getCartBooks: (state: RootState) => state.cartReducer.cartItems,
  getCartBooksWithoutRemovedBook: (state: RootState) =>
    state.cartReducer.cartItems,
};
