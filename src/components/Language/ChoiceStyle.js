import styled from 'styled-components';

export const Tabs = styled.div`
	padding-top: 50px;
	padding-bottom: 30px;
`
export const Tab = styled.button`
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
	flex-wrap: wrap;
	list-style: none;
	& li {
		margin: 8px 16px 8px 0;
		padding: 8px 8px 8px 8px;
		width: 164px;
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
