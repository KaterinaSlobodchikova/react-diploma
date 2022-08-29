import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import {
  BookstoreLogo,
  FavIcon,
  CartIcon,
  UserIcon,
  SearchIcon,
  CartIconActive,
  FavIconActive,
  LoginIcon,
} from "../../Assets";
import IconButton from "../IconButton";
import Divider from "../Divider";
import styles from "./Header.module.css";
import { removeUser } from "../../Redux/reducers/user";
import { BooksSelectors } from "../../Redux/reducers/books";
import { CartSelectors } from "../../Redux/reducers/cart";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favBooksList = useSelector(BooksSelectors.getFavBooks);
  const cartBooksList = useSelector(CartSelectors.getCartBooks);
  const isFavListExist = favBooksList.length !== 0;
  const isCartListExist = cartBooksList.length !== 0;

  const homePageHandler = () => {
    navigate("/main");
  };

  const searchHandler = () => {
    navigate("/search");
  };

  const favoritesHandler = () => {
    navigate("/favorites");
  };

  const cartPageHandler = () => {
    navigate("/cart");
  };

  const accountHandler = () => {
    navigate("/account-info");
  };

  const logOutHandler = () => {
    dispatch(removeUser());
  };

  return (
    <div className={classNames(styles.headerWrapper)}>
      <div className={classNames(styles.contentWrapper)}>
        <IconButton icon={BookstoreLogo} onClick={homePageHandler} />
        <div className={classNames(styles.iconsWrapper)}>
          <IconButton icon={SearchIcon} onClick={searchHandler} />
          {isFavListExist ? (
            <IconButton icon={FavIconActive} onClick={favoritesHandler} />
          ) : (
            <IconButton icon={FavIcon} onClick={favoritesHandler} />
          )}

          {isCartListExist ? (
            <IconButton icon={CartIconActive} onClick={cartPageHandler} />
          ) : (
            <IconButton icon={CartIcon} onClick={cartPageHandler} />
          )}

          <IconButton icon={UserIcon} onClick={accountHandler} />
          <IconButton icon={LoginIcon} onClick={logOutHandler} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
