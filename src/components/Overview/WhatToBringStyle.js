import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 500;	
	margin-top: 48px;
	margin-bottom: 32px;
	@media (max-width: 744px) {
		margin-top: 32px;
	}
`
export const Lists = styled.ul`
	list-style: none;
	& li {
		display: flex;
		align-items: flex-start;
		margin-bottom: 16px;
		img {
			width: 24px;
			height: 24px;
			margin-right: 16px;
		}
		span {
			font-size: 16px;
			font-weight: 300;
			line-height: 24px;
		}
	}
`
export const ShowAll = styled.button`
	margin-top: 24px;
	margin-bottom: 48px;
	@media (max-width: 744px) {
		margin-bottom: 32px;
	}
	text-decoration: underline;
	font-size: 16px;
	color: rgb(113, 113, 113);
	display: flex;
	align-items: center;
	& img {
		width: 16px;
		height: 16px;
	}
`
export const ModalStyle = styled.div`
	& h1 {
		font-size: 26px;
		font-weight: 600;
		margin-top: 40px;
		margin-bottom: 32px;
	}
`