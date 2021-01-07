import React, { createContext } from 'react';
import useModal from './useModal';
import Modal from './Modal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const { showModal, modalContent, modalSize, handleModal } = useModal();

	return (
		<ModalContext.Provider value={{ showModal, modalContent, modalSize, handleModal }}>
			<Modal />
			{children}
		</ModalContext.Provider>
	)
}

export default ModalContext;