import styled from 'styled-components';

export const AvailabilityStyled = styled.div`
	padding: 48px calc(100%/7) 48px calc(100%/10);
	display: flex;
	@media (max-width: 744px) {
		display: none;
	}
`
export const TimeTable = styled.div`
	position: sticky;
	margin-top: auto;
	bottom: 10px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
	padding: 24px;
	width: 100%;
	background-color: white;
`
export const Price = styled.div`
	position: relative;
	& span:nth-child(1) {
		font-size: 22px;
		font-weight: 500;
    line-height: 26px;
	}
	& span:nth-child(2) {
		margin-left: 4px;
		font-size: 16px;
		font-weight: 300;
	}
	& button {
		text-decoration: underline;
		font-size: 14px;
		color: rgb(138, 138, 138);
		display: block;
	}
	& button:hover {
		color: black;
	};
`
export const DateSelection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 1px solid rgb(176, 176, 176);
	border-radius: 12px;
	margin: 24px 0;
	& button {
		padding: 12px 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		img {
			width: 14px;
			height: 14px;
		}
		p {
			margin-top: 4px;
		}
	}
	& button:nth-child(2) {
		border-left: 1px solid rgb(176, 176, 176);
	}
`
export const Choose = styled.div`
	padding: 24px 0;
	border-bottom: 1px solid rgb(221, 221, 221);
	display: flex;
	justify-content: space-between;
	& div:nth-child(1) p:nth-child(1) {
		font-size: 14px;
    line-height: 18px;
    font-weight: 600;
	}
	& div:nth-child(1) p:nth-child(2) {
		font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
	}
	& div:nth-child(1) a {
		font-size: 12px;
		font-weight: 600;
	}
	& div:nth-child(2) {
		display: flex;
		flex-direction: column;
	}
	& div:nth-child(2) span:nth-child(1) {
		font-size: 14px;
		font-weight: 600;
	}
	& div:nth-child(2) span:nth-child(2) {
		font-size: 14px;
	}
	& div:nth-child(2) a {
		margin-top: 6px;
		background-color: #e51d52;
		color: white;
		padding: 8px 16px;
		border-radius: 8px;
		text-decoration: none;
		font-size: 14px;
	}
`
export const More = styled.div`
	margin-top: 24px;
	padding: 13px 23px;
	border: 1px solid black;
	border-radius: 8px;
	text-align: center;
	& a {
		text-decoration: none;
		font-weight: 500;
	}
`
