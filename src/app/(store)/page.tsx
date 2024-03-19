'use client'
import { Button, Load, Modal } from '@/components';
import * as S from './styles'
import { InputSearch } from '@/components/FormComponents/inputSearch/InputSearch';
import React, { useEffect, useState } from 'react';
import { MdFilterList } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import ReactPaginate from 'react-paginate';
import { IDataProduct, IProducts } from '@/models/Products';
import { api } from '@/service/api';
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { InputRHF } from '@/components/RHFComponents';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IaddProduct {
  nameProduct: string
}

export default function Home() {
  const [isActiveDrop, setIsActiviDrop] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  const [showModalProduct, setShowModalProduct] = useState(false)

  const [data, setData] = useState<IProducts[]>([] as IProducts[])
  const [dataTemp, setDataTemp] = useState<IProducts[]>([] as IProducts[])

  const [currentItems, setCurrentItems] = useState<any>(null)
  const [pageCount, setPageCount] = useState<number | any>(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [search, setSearch] = useState('')

  const router = useRouter()

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  function handleClick(id: number) {
    router.push(`/product/${id}`)
  }

  const methods = useForm<IaddProduct>();


  const {
    handleSubmit,
    formState: { errors },
  } = methods;


  const onSubmit = async (data: any) => {
    console.log(data)

    const result = await api.post('products/add', {
      title: data
    })

    if (result) {
      toast.success('Produto Casdastro com Sucesso!')
      setShowModalProduct(false)
    } else {
      toast.error('Algor errado aconteceu tente novamente!')
    }
    //Revalidate and get All Product
  };


  const filter = (search: string) => {
    if (!search) {
      setData(dataTemp)
      return
    }
    const result = dataTemp?.filter(
      (item) =>
        item.title.toUpperCase().includes(search.toUpperCase()) ||
        String(item.price).includes(search)
    )
    setData(result)
  }


  const getProducts = async () => {
    setIsloading(true)
    const result = await api.get<IDataProduct<IProducts>>('/products').then(({ data }) => {
      setIsloading(false)
      setData(data.products)
      setDataTemp(data.products)
    })

    return result
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])


  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    filter(search)
  }, [search])


  return (
    <S.Wrapper >
      <div className='container'>
        <div className="content-input-search">
          <InputSearch
            type='text'
            placeholder='Digite para fazer sua pequisa'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <S.WrapperFilterButton>
            <button type='button' onClick={() => setIsActiviDrop(!isActiveDrop)}>
              <MdFilterList />
              Filtrar
            </button>


            {isActiveDrop &&
              <React.Fragment>
                <div className="dropdown-filter">
                  <ul>
                    <li>Categoria</li>
                    <li>Nome</li>
                    <li>Preco</li>
                  </ul>
                </div>
                <div id="overlay-dropown-filter" onClick={() => setIsActiviDrop(!isActiveDrop)}></div>
              </React.Fragment>
            }
          </S.WrapperFilterButton>

          <S.ButtonAddProduct onClick={() => setShowModalProduct(true)}>
            <IoAdd />
          </S.ButtonAddProduct>
        </div>

        <div className="content-body-itens">
          {
            currentItems &&
            currentItems.map((item: IProducts, index: number) => {
              return (
                <S.Item key={index}>
                  <div className="card-header">
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={130}

                    />

                  </div>
                  <div className="card-description">

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>Categoria: {item.category}</span>
                  </div>
                  <div className="price">
                    <h3>R$ {item.price}</h3>
                    <Button onClick={() => handleClick(item.id)}>
                      Saiba mais
                      <BiCommentDetail />
                    </Button>
                  </div>
                </S.Item>
              )
            })
          }

          {isLoading && <div className="content-load">
            <Load />
          </div>}

          {data.length < 1 && !isLoading &&
            <div className='content-not-found'>
              <MdOutlineRemoveShoppingCart size={50} />
              <p>Nenhum Item encontrado, Pesquise outro produto!</p>
            </div>
          }
        </div>

        <S.WrapperPagination>
          <div className="content_pagination">

            <div className="page-info">
              {data && (
                <span className="result">{data.length} Resultados</span>
              )}

              <div className="contentSelect">
                <p>Página: </p>
                <select
                  name=""
                  id=""
                  value={itemsPerPage}
                  onChange={(e) =>
                    setItemsPerPage(Number(e.target.value))
                  }
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">25</option>
                </select>
              </div>
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeClassName="active"
            />
          </div>
        </S.WrapperPagination>

      </div>

      <Modal
        title='Adicionar Produto'
        showModal={showModalProduct}
        onClose={() => setShowModalProduct(false)}
      >
        <FormProvider {...methods}>
          <S.ContentModalProduct>
            <InputRHF
              name='nameProduct'
              placeholder='Digite o nome do Produto'
              type='text'
              rules={{ required: 'Campo Obrigatório' }}
            />
            <p className='text-error'>{errors.nameProduct?.message}</p>

            <Button
              onClick={() => handleSubmit(onSubmit)()}>
              Adicionar produtdo
            </Button>
          </S.ContentModalProduct>
        </FormProvider>

      </Modal>
      <S.Footer>
        <div>
          <p>
            Copyright 2024 | Betacurso Tech. All Rights Reserved.
          </p>

          <span>
            Engineering made by Danrley | www.danrley.dev
          </span>
        </div>
      </S.Footer>
    </S.Wrapper>
  );
}
