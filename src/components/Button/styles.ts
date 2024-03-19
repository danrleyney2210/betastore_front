'use client'

import styled from "styled-components";

export const WrapperButton = styled.button`
  background-color: #62A219;
  color: #fff;
  border: none;
  padding:8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &:disabled {
    background-color: #ddd;
  }

  &:active {
    background-color: #62A219;
  }

  &:hover {
    background-color: #A5DA34;
  }

`