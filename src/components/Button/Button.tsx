import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...rest }: IPropsButton) => {
  return (
    <S.WrapperButton {...rest}>
      {children}
    </S.WrapperButton>
  )
}