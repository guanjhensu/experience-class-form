import styled, { keyframes } from 'styled-components';

export const Modal = styled.div`
	background: transparent;
	position: fixed;
	left: 0;
  top: 0;
  width: 100%;
  height: 100%;
	z-index: 1;
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
	width: 100%;
	height: 100%;
	position: relative;
	animation: ${appearfrombottom} 0.4s ease-out;
`
export const TopNav = styled.div`
	padding: 40px 40px 5px 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& button {
		padding: 9px 16px;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		div {
			padding-right: 8px;
			display: inline-block;
			width: 12px;
			height: 12px;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	& p {
		font-size: 16px;
	}
	& div {
		width: 80px;
		height: 1px;
	}

` 
export const FullImage = styled.div`
	height: 70vh;
	width: 100vw;
	padding: 5vh 0;
	& img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`