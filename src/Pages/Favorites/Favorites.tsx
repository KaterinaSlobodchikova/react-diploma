import { FC } from "react";
import classNames from "classnames";

import styles from "./Favorites.module.css";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import { IconArrowLeft, IconArrowSmall } from "../../Assets";

const Favorites: FC = () => {
  return (
    <div className={classNames(styles.favoritesContainer)}>
      <div className={classNames(styles.favoritesWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={() => {}} />
        <Title text="FAVORITES" />
      </div>
      <div className={classNames(styles.secondTitleContainer)}>
        <h2>POPULAR BOOKS</h2>
        <div>
        <IconButton icon={IconArrowSmall} onClick={() => {}} />
        <div className={classNames(styles.arrowRightWrapper)}>
          <IconButton icon={IconArrowSmall} onClick={() => {}} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
