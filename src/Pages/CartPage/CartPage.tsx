import { FC } from "react";
import classNames from "classnames";

import styles from "./CartPage.module.css";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import { IconArrowLeft } from "../../Assets";
import Button from "../../Components/Button";

const CartPage: FC = () => {
  return (
    <div className={classNames(styles.cartContainer)}>
      <div className={classNames(styles.cartWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={() => {}} />
        <Title text="YOUR CART" />
      </div>
      <div className={classNames(styles.totalContainer)}>
        <div className={classNames(styles.totalWrapper)}>
          <p>Sum total</p>
          <p>VAT</p>
          <h3>TOTAL:</h3>
          <Button
            title="CHECK OUT"
            onClick={() => {}}
            className={classNames(styles.checkButton)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
