import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalBack, ModalContent, ButtonClose } from './ModalStyle';
import ModalContext from './ModalContext'; 
import close from '../../icons/close.svg';

function Modal() {
	const { showModal, modalContent, handleModal } = useContext(ModalContext);

	const closeByClickingOutside = (event) => {
		if (event.target.id === 'outsideModal') handleModal();
	}

	if(showModal) {
		return ReactDOM.createPortal (
			<ModalBack id='outsideModal' onClick={closeByClickingOutside}>
				<ModalContent>
					<ButtonClose onClick={handleModal} >
						<img src={close} alt='close-modal' style={{width: 12}}/>
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