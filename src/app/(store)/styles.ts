'use client';

import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;

 .container{ 
  max-width: 1024px;
  width: 100%;
  margin-top: 100px;
 

  .content-input-search {
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 16px;


    
  }

  .content-body-itens {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 1rem;

    .content-load {
      height: 450px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content-not-found {
      height: 300px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;

      p {
        color: #579B0B;
        font-weight: 700;
      }
    }
  }
 }

  `;

export const Item = styled.div`
  border-radius: 6px;
  background-color: #fff;
  padding: 16px;

  .card-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    img {
      /* height: 40px;
      width: 40px; */

      border-radius: 10px;

    }

    .icon-favorite {
      cursor: pointer;
      color: #ddd;
      &:hover {
        color: #A5DA34;
      }
    }
  }

  .card-description {
    width: 100%;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #444;
      margin-bottom: 8px;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      height: 50px;
      color: #333;
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }

    span {
      font-size: 10px;
    }
  }

  .price {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 22px;
      font-weight: 700;
      color: #579B0B;
    }
  }
  
`


export const WrapperFilterButton = styled.div`
  position: relative;

  .content-button {
    display: flex;
    align-content: center;
    gap: 16px;
  }
  
  button {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:6px;
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    color: #62A219;
    border: 1px solid transparent;

    &:focus {
      background-color: #444;
      color: #A5DA34;
    }

    gap: 6px;

    &:hover {
     border: 1px solid #62A219;
      color: #A5DA34;
    }
  }

  .dropdown-filter {
    z-index: 1;
    position: absolute;
    top: 50px;
    right: 0px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;


    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        font-size: 14px;
        cursor: pointer;

        &:hover {
          color: #D73035;
        }
      }
    }
  }

  #overlay-dropown-filter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const ButtonAddProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:6px;
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    color: #62A219;
    border: 1px solid transparent;

    &:focus {
      background-color: #444;
      color: #A5DA34;
    }

    gap: 6px;

    &:hover {
     border: 1px solid #62A219;
      color: #A5DA34;
    }
`

export const ContentModalProduct = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .text-error {
      color: red;
      font-size: 12px;
    }
`


export const Header = styled.div`
  width: 100%;
  background-color: #fff;
  height: 45px;
  display: flex;
  justify-content: center;

  @media (max-width: 1050px) {
    padding: 0 24px;
  }
  

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;

    h3 {
      cursor: pointer;
      font-weight: 700;

      span{
        color: #999;
      }
    }

    .content-login {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      div {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #999;
        

        span {
          color: #999;
          font-size: 14px; 
        }

        &:hover {
            color: #62A219;

            span {
              color: #62A219;
            }
          }  
        }

      }

      .cart {
        position: relative;

        &:hover {
          .number-itens {
            color: #fff;
          }
        }

        .number-itens {
          position: absolute;
          right: -10px;
          top: -5px;

          height: 12px;
          
          width: 12px;
          border-radius: 50%;
          background-color: #62A219;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 9px;

         
        }
      }

      
    
  }


`;


export const WrapperPagination = styled.div`
  margin-top: 50px;

  .content_pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;

    .page-info {
      display: flex;
      align-items: center;

      .contentSelect {
        display: flex;
        align-items: center;

        > p {
          font-weight: 500;
          font-size: 12px;
          padding-right: 8px;
          margin-bottom: 0px;
        }

        select {
          width: 69px;
          height: 28px;
          border: 1px solid #62A219;
          border-radius: 5px;
        }
      }

      .result {
        font-weight: 400;
        font-size: 12px;
        color: #62A219;
        padding-right: 24px;
      }
    }

    .pagination {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 0px;
      gap: 10px;

     

      .page-num {
        padding: 7px 14px;
        font-size: 14px;
        color: #62A219;
        border-radius: 4px;
        

        &:hover {
          background-color: #62A219;
          color: #fff;
        }
      }

      .active {
        a {
          background-color: #62A219;
          color: #fff;
        }
      }
    }
  }


`


export const Footer = styled.div`
  width: 100%;
  margin-top: 200px;
  background-color: #333;
  display: flex;
  justify-content: center;
  color: #fff;

  > div {
    height: 60px;
    max-width: 1024px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 14px;
    }

    span {
      font-size: 10px;
    }
  }
`