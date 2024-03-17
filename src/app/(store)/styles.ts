'use client';

import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

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
    grid-auto-rows: 210px;
    grid-gap: 1rem;
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
      height: 40px;
      width: 40px;

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
      color: #333;
      margin-bottom: 8px;
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

    &:focus {
      background-color: #444;
      color: #fff;
    }

    gap: 6px;

    &:hover {
      background-color: #444;
      color: #fff;
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