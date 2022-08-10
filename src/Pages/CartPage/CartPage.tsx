import { FC } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CartPage.module.css";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import { IconArrowLeft, IconCancel, IconMinus, IconPlus } from "../../Assets";
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../../Components/Divider";
import {
  CartSelectors,
  removeBook,
  decreaseCart,
  increaseCart,
} from "../../Redux/reducers/cart";

const CartPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartBooksList = useSelector(CartSelectors.getCartBooks);

  const sumTotal = cartBooksList.reduce(
    (total, book) => total + +book.price.replace(/[^\d.-]/g, "") * book.quantity,
    0
  );
  const vat = +(sumTotal * 0.18).toFixed(2);
  const total = +(sumTotal + vat).toFixed(2);

  const onStepBackHandler = () => {
    navigate(-1);
  };

  const onCheckOutHandler = () => {
    alert("Thank you for your order!");
    navigate("/main");
  };

  const removeFromCart = (isbn13: string) => {
    dispatch(removeBook(isbn13));
  };

  return (
    <div className={classNames(styles.cartContainer)}>
      <div className={classNames(styles.cartWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <Title text="YOUR CART" />
      </div>
      <div>
        {cartBooksList.length === 0 ? (
          <div className={classNames(styles.noCartInfoWrapper)}>
            Your Cart is empty.
          </div>
        ) : (
          <div className={classNames(styles.cartInfoWrapper)}>
            {cartBooksList.map((book) => (
              <div key={book.isbn13}>
                <div className={classNames(styles.bookInfoWrapper)}>
                  <div className={classNames(styles.bookCardBackground)}>
                    <img src={book.image} alt="book-preview" />
                  </div>

                  <div className={classNames(styles.bookIDescWrapper)}>
                    <div className={classNames(styles.titleWrapper)}>
                      <Link to={`/main/${book.isbn13}`}>{book.title}</Link>
                    </div>
                    <div className={classNames(styles.authorsWrapper)}>
                      by {book.authors}
                    </div>

                    <div className={classNames(styles.qtyWrapper)}>
                      <IconButton
                        icon={IconMinus}
                        onClick={() => dispatch(decreaseCart(book.isbn13))}
                      />
                      <div>{book.quantity}</div>
                      <IconButton
                        icon={IconPlus}
                        onClick={() => dispatch(increaseCart(book.isbn13))}
                      />
                    </div>
                  </div>
                  <div className={classNames(styles.priceWrapper)}>
                    ${(+book.price.replace(/[^\d.-]/g, "") * book.quantity).toFixed(2)}
                  </div>
                  <IconButton
                    icon={IconCancel}
                    onClick={() => removeFromCart(book.isbn13)}
                  />
                </div>

                <div className={classNames(styles.dividerWrapper)}>
                  <Divider />
                </div>
              </div>
            ))}
            <div className={classNames(styles.totalContainer)}>
              <div className={classNames(styles.totalWrapper)}>
                <div className={classNames(styles.sumTotalWrapper)}>
                  {" "}
                  <p>Sum total</p> <div>$ {+sumTotal.toFixed(2)}</div>{" "}
                </div>
                <div className={classNames(styles.sumTotalWrapper)}>
                  <p>VAT</p>
                  <div>$ {vat}</div>
                </div>
                <div className={classNames(styles.cartTotalWrapper)}>
                  <div>TOTAL: </div>
                  <div>$ {total}</div>
                </div>

                <Button
                  title="CHECK OUT"
                  onClick={() => onCheckOutHandler()}
                  className={classNames(styles.checkButton)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
