

'use client'
import { useRouter } from 'next/navigation';
import * as S from './styles'
import { CiLogin } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

interface ILayoutStore {
  children: React.ReactNode
}

export default function StoreLayout({ children }: ILayoutStore) {
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
            <div>
              <FaRegUser />
              <span>UserName</span>
            </div>

            <div>
              <BsCart2 />
              <span>Compras</span>
            </div>

            <div onClick={handleClick}>
              <CiLogin />
              <span>Login</span>
            </div>
          </div>
        </div>
      </S.Header>
      {children}
    </div>
  )
}