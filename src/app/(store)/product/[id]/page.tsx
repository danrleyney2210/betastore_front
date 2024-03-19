'use client'

import { Button, Load } from '@/components'
import * as S from './styles'
import { useParams, useRouter } from 'next/navigation'
import { api } from '@/service/api'
import { IProducts } from '@/models/Products'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/utils/useLocalStorage'
import { useAuth } from '@/contexts/Auth'



interface ProsductsProps {
  params: {
    id: string
  }
}



export default function ProductDinamicPage({ params }: ProsductsProps) {
  const { settotalItem } = useAuth()
  const [isLoading, setIsloading] = useState(true)
  const [product, setProduct] = useState<IProducts>({} as IProducts)
  const [currentImage, setCurrentImage] = useState<string>('')

  const [price, setPrice] = useState(0)
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState<number>(1)


  const router = useRouter()

  function add() {
    setQuantity(quantity + 1)
    setTotal(quantity * price)
  }

  function less() {
    setQuantity((prevState) => {
      if (prevState == 0) return 0;
      return prevState - 1
    })
    setTotal(quantity * price)
  }

  function addToCart() {
    settotalItem(quantity)

  }


  async function getProduct(id: string) {
    setIsloading(true)
    const response = await api.get(`/products/${id}`)
    setProduct(response.data)
    setCurrentImage(response.data.images[0])
    setPrice(response.data.price)
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
                          fill
                          quality={100}
                          alt=''
                          onClick={() => changeImage(item)}
                        />
                      </div>
                    )
                  })
                }
              </div>

              <div className="main-image">
                <Image
                  src={currentImage}
                  fill
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

                <div className="content-quantity">
                  <button onClick={less}> - </button>
                  <span>{quantity}</span>
                  <button onClick={add}>+</button>
                </div>

                <div className="price">
                  <h1>R$ {price}</h1>
                  <Button onClick={addToCart}>Adicionar ao Carrinho</Button>
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