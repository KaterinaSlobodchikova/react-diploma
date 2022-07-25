import { FC } from "react";
import classNames from "classnames";

import styles from "./BookCard.module.css";
import { BookModel } from "../../../../Types/models/book.model";
import { RatingIcon } from "../../../../Assets";
import { Link } from "react-router-dom";

type BookCardProps = {
  book: BookModel;
};

const BookCard: FC<BookCardProps> = (props) => {
  const { book } = props;

  return (
    <div className={classNames(styles.bookCardContainer)}>
      <div className={classNames(styles.bookCardWrapper)}>
        <div>
          <div className={classNames(styles.bookCardBackground)}>
            <img src={book.image} alt="book-img" />
          </div>

          <div className={classNames(styles.text)}>
            <Link to={`/main/${book.isbn13}`} className="link">
              {book.title}
            </Link>
          </div>
        </div>
        {/*<div>
          {book.authors}, {book.publisher}{" "}
        </div>
        */}
        <div className={classNames(styles.priceRateWrapper)}>
          <div className={classNames(styles.text)}>{book.price}</div>
          <div>
            <img src={RatingIcon} alt="rating-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
