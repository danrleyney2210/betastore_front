

'use client'
import * as S from './styles'
import { CiLogin } from "react-icons/ci";
// import { useRouter } from 'next/router';
interface ILayoutStore {
  children: React.ReactNode
}

export default function StoreLayout({ children }: ILayoutStore) {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push('/auth');
  // };

  return (
    <div>
      <S.Header>
        <div>
          <h3>Beta<span>Store</span></h3>
          <div className='content-login'>
            <div>
              <span>UserName</span>
            </div>

            <div>
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