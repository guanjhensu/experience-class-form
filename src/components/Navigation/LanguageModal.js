import React from 'react';
import styled from 'styled-components';
import close from './close.svg';

const Modal = styled.div`
	position: fixed;
	left: 0;
  top: 0;
  width: 100%;
  height: 100%;
	z-index: 1;
	background-color: rgba(0,0,0,0.5);
	animation: appear 0.4s ease-out;
	@keyframes appear {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	padding-top: 40px; /* Location of the box */
`
const ModalContent = styled.div`
	background-color: white;
	border-radius: 12px;
	margin: auto;
	width: 77%;
	height: 82%;
  padding: 24px;
  overflow: auto; /* Enable scroll if needed */
  position: relative;
  animation: appearfrombottom 0.4s ease-out;
  @keyframes appearfrombottom {
  	from {
	    bottom: -100vh;
	    opacity: 0;
	  }
	  to {
	    bottom: 0;
	    opacity: 1;
	  }
  }
`
const ButtonClose = styled.button`
	width: 32px;
	height: 32px;
	background: none;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		background-color: rgb(247, 247, 247);
	}
`
function LanguageModal({ show, closeModal, modalContent=LanguageChoice() }){
	const modalShowOrNot = show ? {display: 'block'} : {display: 'none'};
	return (
		<Modal style={modalShowOrNot}>
			<ModalContent>
				<ButtonClose type='button' onClick={closeModal}>
					<img src={close} alt='close-modal' style={{width: 12}}/>
				</ButtonClose>
				{ modalContent }
			</ModalContent>
		</Modal>
	)
}

function LanguageChoice(){
	return (
		<>
			<p>Some text in the Modal...</p>
			<p>More text in the Modal...</p>
		</>
	)
}

export default LanguageModal;