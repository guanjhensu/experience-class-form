import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalBack, ModalContent, ButtonClose } from './ModalStyle';
import ModalContext from './ModalContext'; 

function Modal() {
	const { showModal, modalContent, handleModal } = useContext(ModalContext);

	if(showModal) {
		return ReactDOM.createPortal (
			<ModalBack>
				<ModalContent>
					<ButtonClose onClick={handleModal} >X</ButtonClose>
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