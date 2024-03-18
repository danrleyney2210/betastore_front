'use client'

import { Input } from '@/components/FormComponents/input/Input'
import * as S from './styles'
import { Button } from '@/components'
import { useState } from 'react'
import { InputRHF } from '@/components/RHFComponents'
import { FormProvider, useForm } from 'react-hook-form';
import { ILoginSchema } from './types'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/Auth'
import { BsFillCartCheckFill } from "react-icons/bs";


export default function Auth() {
  const router = useRouter()

  const { AuthLogin } = useAuth()

  const defaultValueForm = {
    user: '',
    key: ''
  };

  const methods = useForm<ILoginSchema>({
    defaultValues: defaultValueForm,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;


  const onSubmit = (data: ILoginSchema) => {
    AuthLogin(data)
  };

  return (
    <S.Wrapper>
      <div className="content">

        <div className="box-left">
          <BsFillCartCheckFill size={39} color='#fff' />
          <h1>Beta<span>Store</span></h1>
        </div>

        <div className="box-right">
          <h1>Faça seu Login</h1>
          <div>
            <FormProvider {...methods}>
              <InputRHF
                type='text'
                name='user'
                placeholder='Digite seu usuário'
                rules={{ required: 'Campo Obrigatório' }}
              />
              <p className='text-error'>{errors.user?.message}</p>
              <InputRHF
                type='password'
                placeholder='Digite seu usuário'
                name='key'
                rules={{ required: 'Campo Obrigatório' }}
              />
              <p className='text-error'>{errors.key?.message}</p>
              <Button
                style={{ padding: '10px' }}
                onClick={() => handleSubmit(onSubmit)()}
              >
                Entrar
              </Button>
            </FormProvider>

          </div>
        </div>

      </div>
    </S.Wrapper>
  )
}