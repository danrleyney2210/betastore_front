'use client'

import styled from 'styled-components';

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label {
    color: #333333;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  input {
    padding: 10px;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 8px;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

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

export const ContentInput = styled.div`
  background-color: red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  display: flex;
  height: 48px;
  width: 100%;
  border: 1px solid var(--secondary-300, #e0deea);
  background: #fff;

  svg {
    cursor: pointer;
  }

  > svg,
  img {
    width: 16px;
    height: 16px;
    color: #e0deea;
  }

  input {
    border: none;
    outline: none;
    background-color: #fff;
    width: 100%;

    &::placeholder {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary[300]};
    }
  }
`;