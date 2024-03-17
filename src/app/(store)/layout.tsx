

import * as S from './styles'
import { CiLogin } from "react-icons/ci";

interface ILayoutStore {
  children: React.ReactNode
}

export default function StoreLayout({ children }: ILayoutStore) {
  return (
    <div>
      <S.Header>
        <div>
          <h3>Beta<span>Store</span></h3>
          <div className='content-login'>
            <CiLogin />
            <span>Login</span>
          </div>
        </div>
      </S.Header>
      {children}
    </div>
  )
}