import styled from 'styled-components';

export const Modal = styled.div`
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
export const ModalContent = styled.div`
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
export const ButtonClose = styled.button`
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
export const Tabs = styled.div`
	padding-top: 30px;
	padding-bottom: 30px;
`
export const Tab = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 16px;
	padding-right: 32px;
	color: ${ props => (props.active) ? '' : 'rgb(176, 176, 176)' };
	text-decoration: ${ props => (props.active) ? 'underline' : 'none' };
`
export const Title = styled.h1`
	font-size: 22px;
	font-weight: normal;
	color: rgb(72, 72, 72);
	margin: 24px 0;
`
export const Languages = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	list-style: none;
	& li {
		margin: 8px 16px 8px 0;
		padding: 8px 8px 8px 8px;
		width: 158px;
	}
	& li:nth-child(1) {
		border: 1px solid black;
		border-radius: 8px;
	}
	& li a {
		text-decoration: none;
	}
	& li:hover {
		background-color: rgb(247, 247, 247);
		border-radius: 8px;
	}
	& li a div {
		font-size: 14px;
		padding-left: 4px; 
	}
	& li a div:nth-child(2) {
		color: rgb(113, 113, 113);
	}
`
export const Currencies = styled(Languages)``;
