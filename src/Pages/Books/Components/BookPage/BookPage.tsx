import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import styles from "./BookPage.module.css";
import {
  BooksSelectors,
  setSelectedBook,
} from "../../../../Redux/reducers/books";
import Title from "../../../../Components/Title";
import Subscribe from "../../../../Components/Subscribe";
import {
  FBIcon,
  IconArrowLeft,
  MoreIcon,
  RatingIcon,
  TwitterIcon,
} from "../../../../Assets";
import Button from "../../../../Components/Button";
import IconButton from "../../../../Components/IconButton";
import Divider from "../../../../Components/Divider";

const BookPage: FC = () => {
  const dispatch = useDispatch();
  const book = useSelector(BooksSelectors.getSelectedBook);
  const { bookId } = useParams<{ bookId: string }>();

  useEffect(() => {
    dispatch(setSelectedBook(bookId));
  }, []);

  return (
    <div className={classNames(styles.bookPageContainer)}>
      <IconButton icon={IconArrowLeft} onClick={() => {}} />
      <Title text={book?.title ?? ""} />
      <div className={classNames(styles.bookInfoContainer)}>
        <div className={classNames(styles.bookImageContainer)}>
          <div className={classNames(styles.bookBackground)}>
            <img src={book?.image} alt="book-preview" />
          </div>
        </div>
        <div className={classNames(styles.bookInfoWrapper)}>
          <div className={classNames(styles.dividerLineSmall)}></div>
          <div className={classNames(styles.detailsWrapper)}>
            <div className={classNames(styles.priceWrapper)}>{book?.price}</div>
            <div>
              <img src={RatingIcon} alt="rating-icon" />
            </div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Authors</p>
            <div>{book?.authors}</div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Publisher</p>
            <div>{book?.publisher}</div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Language</p>
            <p>English</p>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Format</p>
            <p>Paper book / ebook (PDF)</p>
          </div>
          <p>More details...</p>
          <Button
            title="ADD TO CART"
            onClick={() => {}}
            className={classNames(styles.buttonWrapper)}
          />
          <p>Preview book</p>
        </div>
      </div>

      <div className={classNames(styles.titlesWrapper)}>
        <div className={classNames(styles.oneTitleWrapper)}>
          <p>Description</p>
          <div className={classNames(styles.dividerLine)}></div>
        </div>

        <p>Authors</p>
        <p>Reviews</p>
      </div>

      <Divider />

      <div className={classNames(styles.descWrapper)}>{book?.desc}</div>

      <div className={classNames(styles.IconsWrapper)}>
        <IconButton icon={FBIcon} onClick={() => {}} />
        <IconButton icon={TwitterIcon} onClick={() => {}} />
        <IconButton icon={MoreIcon} onClick={() => {}} />
      </div>

      <Subscribe />

      <h2>SIMILAR BOOKS</h2>
      <div>SIMILAR BOOKS</div>
    </div>
  );
};

export default BookPage;
