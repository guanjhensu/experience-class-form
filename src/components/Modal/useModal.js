import { useState } from 'react';

// create a hook "useModal" to handle repeatted logics when dealing with modal
function useModal() {
	const [ showModal, setShowModal ] = useState(false);
	const [ modalContent, setModalContent ] = useState('This is the content of the modal.');
	const [ modalSize, setModalSize ] = useState('medium');

	const handleModal = (content = false, size = 'medium') => { 
		setShowModal(!showModal); // toggle the modal
		if (content) {
			setModalContent(content);	// set the content if any
			setModalSize(size);	// set the size 
		}
	}

	return { showModal, modalContent, modalSize, handleModal };
}

export default useModal;