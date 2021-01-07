import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalBack, ModalContent, ButtonClose } from './ModalStyle';
import ModalContext from './ModalContext'; 
import close from '../../icons/close.svg';
import closeThin from '../../icons/closeThin.svg';

function Modal() {
	const { showModal, modalContent, modalSize, handleModal } = useContext(ModalContext);

	const closeByClickingOutside = (event) => {
		if (event.target.id === 'outsideModal') handleModal();
	}

	const buttonCloseImage = (modalSize) => {
		if(modalSize==='large') return close;
		return closeThin;
	}

	if(showModal) {
		return ReactDOM.createPortal (
			<ModalBack id='outsideModal' onClick={closeByClickingOutside}>
				<ModalContent modalSize={modalSize}>
					<ButtonClose onClick={handleModal} modalSize={modalSize} >
						<img src={buttonCloseImage(modalSize)} alt='close-modal' />
					</ButtonClose>
					<div>{modalContent}</div>
				</ModalContent>
			</ModalBack>,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
}

export default Modal;