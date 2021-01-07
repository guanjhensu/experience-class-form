import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 500;	
	margin-top: 48px;
	margin-bottom: 24px;
`
export const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-bottom: 48px;
	& div {
		border: 1px solid #dddddd;
		border-radius: 8px;
		padding: 32px 16px 32px 16px;
		img {
			width: 32px;
			height: 32px;
		}
		h3 {
			font-size: 17px;
			font-weight: 500;
			padding-top: 5px;
			padding-bottom: 16px;
		}
		p {
			font-size: 14px;
			font-weight: 300;
			line-height: 18px;
		}
		button {
			margin-top: 16px;
			background: none;
			border: none;
			text-decoration: underline;
			font-size: 16px;
			color: rgb(113, 113, 113);
			cursor: pointer;
		}
	}
`
export const ModalStyle = styled.div`
	padding-bottom: 32px;
	& h1 {
		font-size: 26px;
		font-weight: 600;
		margin-top: 40px;
		margin-bottom: 32px;
	}
	& h3 {
		font-size: 16px;
	}
	& p {
		margin-top: 8px;
		font-size: 16px;
		font-weight: 300;
		line-height: 24px;
		a {
			font-weight: 500;
		}
	}	
`