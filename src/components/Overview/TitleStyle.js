import styled from 'styled-components';

export const OnlineExperience = styled.div`
	display: flex;
	align-items: center;
	margin-top: 48px;
	@media (max-width: 744px) {
		margin-top: 20px;
	}
	margin-bottom: 8px;
	& img {
		width: 16px;
		height: 16px;
		margin-right: 4px;
		display: inline-block;
	}
	& span {
		font-size: 12px;
		text-transform: uppercase;
		font-weight: bold;
	}
`
export const ClassTitle = styled.h1`
	font-size: 26px;
	font-weight: 500;
	letter-spacing: 1px;
	margin-bottom: 4px;
`
export const Info = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 8px;
	margin-bottom: 48px;
	@media (max-width: 744px) {
		margin-bottom: 30px;
	}
	& span {
		font-size: 14px;
		flex: 0 0 auto;
	}
	& span a {
		font-weight: bold;
	}
`
export const Rating = styled.button`
	background-color: transparent;
	border: none;
	height: 20px;
	display: inline-flex;
	align-items: center;
	img {
		display: inline-block;
		height: 80%;
		margin-right: 4px;
	}
	& span:nth-of-type(1) {
		font-weight: bold; 
	}
	& span:nth-of-type(2) {
		margin-left: 4px;
	}
`
export const Interpunct = styled.span`
	margin: 0 8px;
`