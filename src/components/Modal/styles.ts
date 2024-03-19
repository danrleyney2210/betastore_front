'use client'

import styled from 'styled-components';

export const OverlayModal = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  max-width: 350px;
  width: 100%;
  height: fit-content;
  max-height: 90dvh;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;

  & {
    --sb-track-color: #ffffff;
    --sb-thumb-color: #cccccc;
    --sb-size: 6px;
  }

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }

  @supports not selector(::-webkit-scrollbar) {
    & {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 18px;
    }

    button {
      display: flex;
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;