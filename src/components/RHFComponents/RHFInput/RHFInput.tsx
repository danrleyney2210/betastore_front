'use client'

import { IInputProps } from '@/components';
import { Input } from '@/components/FormComponents/input/Input';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';


export interface IInputRHF extends Omit<IInputProps, 'name'> {
  name: string
  rules?: RegisterOptions<any, any>
  handleOnChange?: any
}


export const InputRHF = ({
  id,
  name,
  rules,
  ...rest
}: IInputRHF) => {

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => (
        <Input
          id={id}
          onChange={(e) => onChange(e)}
          {...rest}
        />
      )}
    />
  );
};