import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookModel } from "./../../../Types/models/book.model";
import { RootState } from "../../store";

type InitialStateType = {
  booksList: any[];
  selectedBook: BookModel | null;
  isBooksLoading: boolean;
  selectedBookLoading: boolean;
  favBooksList: any[];
};

const initialState: InitialStateType = {
  booksList: [],
  selectedBook: null,
  isBooksLoading: false,
  selectedBookLoading: false,
  favBooksList: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<undefined>) => {}, //=== fetch process from BE
    setLoadingBooks: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<any[]>) => {
      state.booksList = action.payload;
    },
    setSelectedBook: (state: any, action: any) => {
      state.selectedBook = action.payload;
    },
    setSelectedBookLoading: (state: any, action: any) => {
      state.isSelectedBookLoading = action.payload;
    },
    setFavBooks: (state: any, action: any) => {
      const existingBook = state.favBooksList.findIndex(
        (book: BookModel) => book.isbn13 === action.payload.isbn13
      );
      if (existingBook >= 0) {
        state.favBooksList[existingBook] = {
          ...state.favBooksList[existingBook],
        };
      } else {
        state.favBooksList.push(action.payload);
      }
    },
    removeFromFavs: (state: any, action: any) => {
      const index = state.favBooksList.findIndex(
        (book: BookModel) => book.isbn13 === action.payload
      );
      state.favBooksList.splice(index, 1);
    },
  },
});

export const {
  getBooks,
  setLoadingBooks,
  setBooks,
  setSelectedBook,
  setSelectedBookLoading,
  setFavBooks,
  removeFromFavs,
} = booksSlice.actions;

const reducer = booksSlice.reducer;

export default reducer;

export const BooksSelectors = {
  getBooks: (state: RootState) => state.books.booksList,
  getBooksLoading: (state: RootState) => state.books.isBooksLoading,
  getAllBooks: (state: RootState) => state.books.booksList,
  getSelectedBook: (state: RootState) => state.books.selectedBook,
  getSelectedBookLoading: (state: RootState) => state.books.selectedBookLoading,
  getFavBooks: (state: RootState) => state.books.favBooksList,
  getFavBooksAfterRemoving: (state: RootState) => state.books.favBooksList,
};
