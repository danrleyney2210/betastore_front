

'use client'
import { useRouter } from 'next/navigation';
import * as S from './styles'
import { CiLogin } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { useAuth } from '@/contexts/Auth';
import { CiLogout } from "react-icons/ci";

interface ILayoutStore {
  children: React.ReactNode
}

export default function StoreLayout({ children }: ILayoutStore) {
  const { dataUser, GoOut } = useAuth()
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth');
  };

  return (
    <div>
      <S.Header>
        <div>
          <h3 onClick={() => router.push('/')}>Beta<span>Store</span></h3>
          <div className='content-login'>
            {dataUser && <div>
              <FaRegUser />
              <span>{dataUser.firstName}</span>
            </div>}

            <div className='cart'>
              <BsCart2 />
              <span>Compras</span>
              <span className='number-itens'>0</span>
            </div>

            {!dataUser && <div onClick={handleClick}>
              <CiLogin />
              <span>Login</span>
            </div>}



            {dataUser && <div style={{ marginLeft: '10px' }} onClick={GoOut}>
              <CiLogout />
              <span>Sair</span>
            </div>}
          </div>
        </div>
      </S.Header>
      {children}
    </div>
  )
}