import { FC, ChangeEvent } from "react";

type InputProps = {
  type: string;
  onChange: any;
  placeholder?: string;
};

const Input: FC<InputProps> = ({ type, onChange, placeholder }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input type="text" onChange={onInputChange} />;
};

export default Input;
