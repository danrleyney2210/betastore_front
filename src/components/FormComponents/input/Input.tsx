import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  type: string;
  name?: string;
  placeholder?: string;
}

export const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  ...rest
}: IInputProps) => {
  return (
    <S.WrapperInput>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </S.WrapperInput>
  );
};