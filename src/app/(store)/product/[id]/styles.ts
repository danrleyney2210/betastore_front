'use client'

import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  

  .content {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    .go-back {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #666;
      margin-bottom: 20px;
      
      &:hover{
        color: #579B0B;
      }
      
      span {
        font-size: 14px;
      }
    }

    .item {
      /* max-width: 900px; */
      width: 100%;
      background-color: #fff;
      border-radius: 8px;
      padding: 16px;

      display: flex;
      gap: 20px;

      .content-images {
        height: 100%;
        width: 80px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        row-gap: 20px;
        
        .item-image {
          position: relative;
          height: 80px;
          width: 80px;
          transition: transform 0.3s ease;
          cursor: pointer;

          img {
            width: fit-content;
            height: fit-content;
            object-fit: cover;
            object-position: center;
          }

          &:hover {
            transform: scale(1.1);
           
          }
        }
      }

      .main-image {
        max-width: 500px;
        width: 100%;
        height: 500px;
        position: relative;
        
        border-radius: 10px;

        img {
          object-fit: contain;
          object-position: center;
          width: fit-content;
          height: fit-content;
        }
   
      }

      .description {
        h1 {
          font-size: 18px;
          color: #444;
          font-size: 700;
          margin-bottom: 18px;
        }

        p {
          font-size: 14px;
          color: #333;
          font-weight: 700;
          margin-bottom: 8px;

          sapn {
            color: #d2d3d4;
          }
          
        }


        .content-quantity {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 15px 0px;


          button{
            padding: 10px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            border-radius: 6px;

            &:hover {
              background-color: #579B0B;
              color: #fff;
            }
          }
        }
       

        .price {
          max-width: 200px;
          display: flex;
          flex-direction: column;
          gap: 16px;

          h1 {
            color: #579B0B;
            font-weight: 700;
            font-size: 20px;
          }

          button:nth-child(3) {
            background-color: red;
          }
        }
      }
    }

    .content-load {
      height: 400px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  @media (max-width: 1024px) {
    .content {
      padding: 0 24px;
      
      .item {
        flex-direction: column;
        

        .content-images {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
        }

        .main-image {
          max-width: 100% !important;
        }
      }
    }
  }

`


export const ModalDelete = styled.div`

  h3 {
    margin-top: 18px;
  }

  .content-btn {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      margin-top: 16px;
      padding: 6px 26px;
      cursor: pointer;
      border-radius: 6px;
      border: none;
      font-size: 13px;
      color: #fff;
      background-color: #999;
    }

    button:nth-child(1) {
       background-color:red;
    }

    button:nth-child(2) {
      background-color: #579B0B;
    }
  }
`