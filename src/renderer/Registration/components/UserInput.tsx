import { memo, InputHTMLAttributes } from 'react';

type UserInputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const UserInput = ({ name, ...inputProps }: UserInputProps) => {
  return (
    <input
      placeholder="Github 계정이 필요해요"
      type="text"
      autoFocus
      {...inputProps}
    />
  );
};

export default memo(UserInput);
