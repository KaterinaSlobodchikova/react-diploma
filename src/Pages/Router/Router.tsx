import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "../Books";
import Account from "../Account";
import Authorization from "../Authorization";
import CartPage from "../CartPage";
import Favorites from "../Favorites";
import Home from "../Home";
import NewPassword from "../NewPassword";
import Page404 from "../Page404";
import ResetPassword from "../ResetPassword";
import BookPage from "../Books/Components/BookPage";
import SearchPage from "../SearchPage";

enum Pages {
  Home = "/",
  Page = "main",
  SearchPage = "search",
  BookPage = "main/:bookId",
  CartPage = "cart",
  Favorites = "favorites",
  Account = "account-info",
  AuthPage = "authorization",
  ResetPassword = "reset-password",
  NewPassword = "new-password",
  Page404 = "*",
}

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<Home />}>
          <Route path={Pages.Page} element={<Books />} />
          <Route path={Pages.SearchPage} element={<SearchPage />} />
          <Route path={Pages.BookPage} element={<BookPage />} />
          <Route path={Pages.CartPage} element={<CartPage />} />
          <Route path={Pages.Favorites} element={<Favorites />} />
          <Route path={Pages.Account} element={<Account />} />
          <Route path={Pages.AuthPage} element={<Authorization />} />
          <Route path={Pages.ResetPassword} element={<ResetPassword />} />
          <Route path={Pages.NewPassword} element={<NewPassword />} />
          <Route path={Pages.Page404} element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
