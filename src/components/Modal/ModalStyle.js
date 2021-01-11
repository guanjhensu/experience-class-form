import styled, { keyframes } from 'styled-components';

const appear = keyframes`
	from { opacity: 0; }
		to { opacity: 1; }
`
export const ModalBack = styled.div`
	position: fixed;
	left: 0;
  top: 0;
  width: 100%;
  height: 100%;
	z-index: 2;
	background-color: rgba(0,0,0,0.3);
	animation: ${appear} 0.4s ease-out;
	display: grid;
	place-items: center;
`
const appearfrombottom = keyframes`
	from {
	    bottom: -100vh;
	    opacity: 0;
	  }
  to {
    bottom: 0;
    opacity: 1;
  }
`
const getModalSize = (modalSize) => {
	switch(modalSize) {
		case 'large' : return { width: '77%', height: '82%', closeButtonSize: '12px' };
		case 'medium' : return { width: '57%', height: '60%', closeButtonSize: '16px' };
		case 'small': return { width: '30%', height: '60%', closeButtonSize: '16px' };
		default: return { width: '57%', height: '60%', closeButtonSize: '16px' };
	}
}
export const ModalContent = styled.div`
	background-color: white;
	border-radius: 12px;
	margin: auto;
	width: ${props=> getModalSize(props.modalSize).width };
	height: ${props=> getModalSize(props.modalSize).height };
	@media (max-width: 744px) {
		width: 90vw;
		height: 90vh;
	}
  padding: 24px;
  overflow: auto;
  position: relative;
  animation: ${appearfrombottom} 0.4s ease-out;
`
export const ButtonClose = styled.button`
	position: absolute;
	top: 15px;
	left: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	& img {
		width: ${props=> getModalSize(props.modalSize).closeButtonSize };
		height: ${props=> getModalSize(props.modalSize).closeButtonSize };
	}
	&:hover {
		background-color: rgb(247, 247, 247);
	}
`