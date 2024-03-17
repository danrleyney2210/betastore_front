'use client'
import { Button } from '@/components';
import * as S from './styles'
import { InputSearch } from '@/components/FormComponents/inputSearch/InputSearch';
import React, { useState } from 'react';
import { MdFilterList } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";


export default function Home() {
  const [isActiveDrop, setIsActiviDrop] = useState(false)

  return (
    <S.Wrapper >
      <div className='container'>
        <div className="content-input-search">
          <InputSearch type='text' placeholder='Digite para fazer sua pequisa' />

          <S.WrapperFilterButton>
            <button type='button' onClick={() => setIsActiviDrop(!isActiveDrop)}>
              <MdFilterList />
              filter
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
        </div>

        <div className="content-body-itens">
          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">

              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>

          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">
              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>

          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">
              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>

          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">
              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>

          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">
              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>

          <S.Item>
            <div className="card-header">
              <img src="" alt="" />
              <MdFavorite className='icon-favorite' />
            </div>
            <div className="card-description">
              <h3>Titulo do item aqui</h3>
              <p>Pequena descricao do item aqui ou qualquer informacoa da API</p>
              <span>Status</span>
            </div>
            <div className="price">
              <h3>R$ #75,00</h3>
              <Button>
                Saiba mais
                <BiCommentDetail />
              </Button>
            </div>
          </S.Item>
        </div>
      </div>
    </S.Wrapper>
  );
}
