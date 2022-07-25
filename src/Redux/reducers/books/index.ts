import { BookModel } from "./../../../Types/models/book.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type InitialStateType = {
  booksList: any[];
  selectedBook: BookModel | null;
  isBooksLoading: boolean;
  selectedBookLoading: boolean;
};

const initialState: InitialStateType = {
  booksList: [],
  selectedBook: null,
  isBooksLoading: false,
  selectedBookLoading: false,
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
  },
});

export const {
  getBooks,
  setLoadingBooks,
  setBooks,
  setSelectedBook,
  setSelectedBookLoading,
} = booksSlice.actions;

const reducer = booksSlice.reducer;

export default reducer;

export const BooksSelectors = {
  getBooks: (state: RootState) => state.books.booksList,
  getBooksLoading: (state: RootState) => state.books.isBooksLoading,
  getAllBooks: (state: RootState) => state.books.booksList,
  getSelectedBook: (state: RootState) => state.books.selectedBook,
  getSelectedBookLoading: (state: RootState) => state.books.selectedBookLoading,
};
