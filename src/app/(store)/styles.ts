'use client';

import styled from "styled-components";


export const Wrapper = styled.div`
  
  `;


export const Header = styled.div`
  width: 100%;
  background-color: #fff;
  height: 45px;
  display: flex;
  justify-content: center;
  

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
      gap: 4px;
      cursor: pointer;

      span {
        color: #999;

        &:hover {
          color: #D73035;
        }
      }
    }
    
  }


`;