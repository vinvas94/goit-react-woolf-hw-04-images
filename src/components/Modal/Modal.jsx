import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, ImageUrl }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalImage src={ImageUrl} alt="fotos" />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
