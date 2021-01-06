import { useState } from 'react';

// create a hook "useModal" to handle repeatted logics when dealing with modal
function useModal() {
	const [ showModal, setShowModal ] = useState(false);
	const [ modalContent, setModalContent ] = useState('This is the content of the modal.');

	const handleModal = (content = false) => { 
		setShowModal(!showModal); // toggle the modal
		if (content) {
			setModalContent(content);	// set the content if any
		}
	}

	return { showModal, modalContent, handleModal };
}

export default useModal;