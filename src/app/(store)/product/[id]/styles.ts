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
      height: 400px;
      background-color: #fff;
      border-radius: 8px;
      padding: 16px;

      display: flex;
      gap: 16px;

      .content-images {
        height: 100%;
        width: 80px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        .item-image {
          background-color: #ccc;
          height: 100%;
          width: 100%;
        }
      }

      .main-image {
        max-width: 350px;
        width: 100%;
        height: 100%;
        background-color: #ccc;
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

       

        .price {
          h1 {
            color: #579B0B;
            font-weight: 700;
            font-size: 20px;
          }
        }
      }
    }
  }

`