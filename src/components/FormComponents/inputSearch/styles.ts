'use client'

import styled from 'styled-components';

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;

  input {
    width: 100%;
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 8px;
    border-color: transparent;

    &::placeholder {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
    }
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: 10px;
  }
`;

