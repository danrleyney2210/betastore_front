'use client'

import { IoClose } from 'react-icons/io5';
import * as S from './styles';
import { useEffect } from 'react';


interface IModalProps {
  title: string
  showModal: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ title, showModal, onClose, children }: IModalProps) => {



  if (!showModal) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <S.OverlayModal>
      <S.Modal>
        <header>
          <strong>{title}</strong>
          <button type='button' onClick={onClose}>
            <IoClose />
          </button>
        </header>
        {children}
      </S.Modal>
    </S.OverlayModal>
  );
};