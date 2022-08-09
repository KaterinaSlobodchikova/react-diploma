import { FC } from "react";
import classNames from "classnames";

import styles from "./Spinner.module.css";

const Spinner: FC = () => {
  return <div className={classNames(styles.spinnerWrapper)}>Loading...</div>;
};

export default Spinner;
