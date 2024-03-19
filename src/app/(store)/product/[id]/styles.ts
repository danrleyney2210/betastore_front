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
      gap: 16px;

      .content-images {
        height: 100%;
        width: 80px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-template: 15px;
        
        .item-image {
          
          height: 100%;
          width: 100%;
          transition: transform 0.3s ease;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
           
          }
        }
      }

      .main-image {
        max-width: 350px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
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