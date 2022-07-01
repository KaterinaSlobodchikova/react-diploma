import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from "../../Components/Button";

const MockComponent = () => {
  return (
    <div>
      <Button title={"GET POSTS"} onClick={() => {}}></Button>
    </div>
  );
};

enum Pages {
  Home = "/",
  Main = "main",
  SearchPage = "search-results",
  BookPage = "main/:bookId",
  CartPage = "cart",
  Favorites = "favorites",
  Account = "account-info",
  AuthPage = "authorization",
  ResetPassword = "reset-password",
  NewPassword = "new-password",
  Page404 = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<MockComponent />} />
        <Route path={Pages.Main} element={<MockComponent />} />
        <Route path={Pages.SearchPage} element={<MockComponent />} />
        <Route path={Pages.BookPage} element={<MockComponent />} />
        <Route path={Pages.CartPage} element={<MockComponent />} />
        <Route path={Pages.Favorites} element={<MockComponent />} />
        <Route path={Pages.Account} element={<MockComponent />} />
        <Route path={Pages.AuthPage} element={<MockComponent />} />
        <Route path={Pages.ResetPassword} element={<MockComponent />} />
        <Route path={Pages.NewPassword} element={<MockComponent />} />
        <Route path={Pages.Page404} element={<MockComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
