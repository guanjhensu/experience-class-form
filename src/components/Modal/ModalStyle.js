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
	z-index: 1;
	background-color: rgba(0,0,0,0.5);
	animation: ${appear} 0.4s ease-out;
	padding-top: 40px; /* Location of the box */
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
export const ModalContent = styled.div`
	background-color: white;
	border-radius: 12px;
	margin: auto;
	width: 77%;
	height: 82%;
  padding: 24px;
  overflow: auto; /* Enable scroll if needed */
  position: relative;
  animation: ${appearfrombottom} 0.4s ease-out;
`
export const ButtonClose = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
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