import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import Input from "../Input";
import { BookstoreLogo, FavIcon, CartIcon, UserIcon } from "../../Assets";
import IconButton from "../IconButton";
import Divider from "../Divider";

import styles from "./Header.module.css";

const Header: FC = () => {
  const navigate = useNavigate();

  const homePageHandler = () => {
    navigate("/");
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

  return (
    <div className={classNames(styles.headerWrapper)}>
      <div className={classNames(styles.contentWrapper)}>
        <IconButton icon={BookstoreLogo} onClick={homePageHandler} />
        <Input type="text" onChange={onchange} placeholder="Search" />
        <div className={classNames(styles.iconsWrapper)}>
          <IconButton icon={FavIcon} onClick={favoritesHandler} />
          <IconButton icon={CartIcon} onClick={cartPageHandler} />
          <IconButton icon={UserIcon} onClick={accountHandler} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
