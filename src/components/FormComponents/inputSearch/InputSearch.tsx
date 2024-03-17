import { InputHTMLAttributes } from 'react';
import { CiSearch } from "react-icons/ci";
import * as S from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  type: string;
  name?: string;
  placeholder?: string;
}

export const InputSearch = ({
  type,
  name,
  value,
  placeholder,
  ...rest
}: IInputProps) => {
  return (
    <S.WrapperInput>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
      <CiSearch size={20} />
    </S.WrapperInput>
  );
};