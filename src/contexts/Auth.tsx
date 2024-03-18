

import { ILoginSchema } from '@/app/auth/types'
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

  const router = useRouter()

  const AuthLogin = (data: ILoginSchema) => {
    if (data.user === 'admin' && data.key === 'admin') {
      toast.success('Login certo!')
      //redirect to home
      router.push('/')
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