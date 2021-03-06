import styled from 'styled-components';

export const Infos = styled.div`
	margin: 48px 0 24px 0;
	@media (max-width: 744px) {
		margin: 32px 0 8px 0;
	}
`

export const Title = styled.div`
	margin-bottom: 12px;
	height: 56px;
	display: flex; 
	justify-content: space-between;
	& h1 {
		font-size: 22px;
		font-weight: 500;	
	}
	& a {
		width: 56px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 100%;
		}
	}
`
export const Info = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 4px;
	@media (max-width: 744px) {
		display: flex;
		flex-direction: column;
	}
	& div {
		display: flex;
		align-items: center;
		margin-bottom: 24px;
		img {
			width: 32px;
			height: 32px;
			display: inline-block;
			margin-right: 16px;
		}
		p {
			display: inline-block;
			font-size: 16px;
			font-weight: 300;
			line-height: 20px;
		}
	}
`
