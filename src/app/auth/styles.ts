'use client'

import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  .content {
    border-radius: 8px;
    max-width: 700px;
    width: 100%;
    /* border: 1px solid #ccc; */
    display: flex;

    .box-left {
      height: 400px;
      max-width: 300px;
      width: 100%;
      background-color: #62A219;
      border-radius: 8px 0 0 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      color: #ffff;

      h1 {
        color: #fff;
        font-weight: 700;

        span {
          color: #333;
        }
      }
    }

    .box-right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      padding: 16px;

      h1 {
        font-size: 18px;
        color: #444;
        margin-bottom: 22px;
      }

      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      p.text-error {
        color: red;
        font-size: 12px;
      }
    }

  }

  @media (max-width: 730px) {
    .content {
      margin: 0 24px;
    }
  }

  @media (max-width: 630px) {
    .content {
      flex-direction: column;
      .box-left{ 
        background-color: #fff;
        /* display: none; */
        max-width: 100%;
        border-radius: 8px 8px 0 0;
        height: 200px;

        h1 {
          color: #62A219;
        }

        color: #62A219;
      }

      .box-right {
        /* padding: 50px 16px; */
      }
    }
  }
  

`