

import { ILoginSchema } from '@/app/auth/types'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { useRouter } from 'next/navigation'
import { createContext, useContext, ReactNode, useState, useEffect, Children } from 'react'
import toast from 'react-hot-toast'

interface IAuth {
  children: ReactNode
}

interface IContentxtProvider {
  AuthLogin: (data: ILoginSchema) => void
}

export const AuthContext = createContext({} as IContentxtProvider)


export const AuthProvider = ({ children }: IAuth) => {
  const [betastore, setBetaSotre] = useLocalStorage({ storageKey: '@betastore' })

  const router = useRouter()

  const AuthLogin = (data: ILoginSchema) => {
    if (data.user === 'admin' && data.key === 'admin') {
      //Make Call to Api and save the Toke here
      setBetaSotre('toke')

      toast.success('Login efetuado com Sucesso!')
      //redirect to home
      router.push('/')
    } else {
      toast.error('Usuário ou Senha incorretos!')
    }
  };


  return (
    <AuthContext.Provider
      value={{
        AuthLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)