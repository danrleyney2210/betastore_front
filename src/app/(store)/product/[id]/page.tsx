'use client'

import { Button, Load } from '@/components'
import * as S from './styles'
import { useParams, useRouter } from 'next/navigation'
import { api } from '@/service/api'
import { IProducts } from '@/models/Products'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react'



interface ProsductsProps {
  params: {
    id: string
  }
}



export default function ProductDinamicPage({ params }: ProsductsProps) {
  const [isLoading, setIsloading] = useState(true)
  const [product, setProduct] = useState<IProducts>({} as IProducts)
  const [currentImage, setCurrentImage] = useState<string>('')
  const router = useRouter()


  async function getProduct(id: string) {
    setIsloading(true)
    const response = await api.get(`/products/${id}`)
    setProduct(response.data)
    setCurrentImage(response.data.images[0])
    setIsloading(false)
  }

  function changeImage(image: string) {
    setCurrentImage(image)
  }


  useEffect(() => {
    getProduct(params.id)
  }, [params.id])


  return (
    <S.Wrapper>
      <div className="content">
        <div className='go-back' onClick={() => router.push('/')}>
          <IoIosArrowBack />
          <span>Voltar</span>
        </div>

        {
          product && !isLoading ? (
            <div className="item">
              <div className="content-images">
                {
                  product && product.images?.map((item, index) => {
                    return (
                      <div className="item-image">
                        <Image
                          key={index}
                          src={item}
                          width={80}
                          height={60}
                          quality={100}
                          alt=''
                          onClick={() => changeImage(item)}
                        // layout="responsive"
                        />
                      </div>
                    )
                  })
                }
              </div>
              <div className="main-image" style={{ maxWidth: '500px' }}>
                <Image
                  src={currentImage}
                  width={500}
                  height={468}
                  quality={100}
                  alt=''
                // layout="responsive"
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
          ) : (
            <div className="content-load">
              <Load />
            </div>
          )
        }
      </div>
    </S.Wrapper>
  )
}