import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTitle = styled.div`
  color: #6d6d6d;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;

const ModalContent = styled.div`
  background: rgb(255, 255, 255);
  border: solid 1px white;
  padding: 10px;
  border-radius: 8px;
  max-width: 380px;
  width: 100%;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  color: rgb(75, 85, 99);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-top: 10px;
  overflow-y: auto;
  flex-grow: 1;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
