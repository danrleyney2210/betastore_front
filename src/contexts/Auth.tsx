

import { ILoginSchema } from '@/app/auth/types'
import { api } from '@/service/api'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { useRouter } from 'next/navigation'
import { createContext, useContext, ReactNode, useState, useEffect, Children } from 'react'
import toast from 'react-hot-toast'

interface IAuth {
  children: ReactNode
}

export type TResponseLogin = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

interface IContentxtProvider {
  AuthLogin: (data: ILoginSchema) => void
  dataUser: TResponseLogin
  GoOut: () => void
  totalItem: number
  settotalItem: any
}

export const AuthContext = createContext({} as IContentxtProvider)


export const AuthProvider = ({ children }: IAuth) => {
  const [betastore, setBetaSotre] = useLocalStorage({ storageKey: '@betastore-token' })
  const [dataUser, setDataUser] = useLocalStorage({ storageKey: '@betastore-data' })
  const [totalItem, settotalItem] = useState(0)
  const router = useRouter()

  const AuthLogin = async (data: ILoginSchema) => {

    const result = await api.post<TResponseLogin>('/auth/login', {
      username: data.user,
      password: data.key
    })
    if (result) {


      setBetaSotre(result.data.token)
      setDataUser(result.data)

      toast.success('Login efetuado com Sucesso!')
      //redirect to home
      router.push('/')
    } else {
      toast.error('Usuário ou Senha incorretos!')
    }
  };

  const GoOut = async () => {
    localStorage.clear();
    router.push('/auth')
  }


  return (
    <AuthContext.Provider
      value={{
        AuthLogin,
        dataUser,
        GoOut,
        totalItem,
        settotalItem
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)