import { FC, ForwardedRef } from "react";
import classNames from "classnames";

import styles from "./Input.module.css";

type InputProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  type: string;
  value?: string;
  onChange: any;
  placeholder?: string;
  onKeyDown?: any;
};

const Input: FC<InputProps> = ({
  ref,
  type,
  value,
  onChange,
  placeholder,
  onKeyDown,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onInputChange}
      className={classNames(styles.input)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
