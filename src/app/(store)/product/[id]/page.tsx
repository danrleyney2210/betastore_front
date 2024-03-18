

import { Button } from '@/components'
import * as S from './styles'
import { useParams } from 'next/navigation'
import { api } from '@/service/api'
import { IProducts } from '@/models/Products'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";



interface ProsductsProps {
  params: {
    id: string
  }
}

async function getProduct(id: string) {
  const response = await api.get(`/products/${id}`)
  const products = await response.data
  return products;
}

export default async function ProductDinamicPage({ params }: ProsductsProps) {
  const product: IProducts = await getProduct(params.id);



  return (
    <S.Wrapper>
      <div className="content">
        <div className='go-back'>
          <IoIosArrowBack />
          <span>Voltar</span>
        </div>
        <div className="item">
          <div className="content-images">
            <div className="item-image"></div>
            <div className="item-image"></div>
            <div className="item-image"></div>
            <div className="item-image"></div>
          </div>
          <div className="main-image" style={{ maxWidth: '350px' }}>
            <Image
              src={product.images[0]}
              width={350}
              height={368}
              quality={100}
              alt=''
            />
          </div>
          <div className="description">
            <h1>{product.title}</h1>
            <p>Descrição: <span>{product.description}</span></p>
            <p>Categoria: <span>{product.category}</span></p>
            <p>Stock: <span>{product.stock}</span></p>
            <p>Brand: <span>{product.brand}</span></p>
            <div className="price">
              <h1>R$ 500,00</h1>
              <Button>Adicionar ao Carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}