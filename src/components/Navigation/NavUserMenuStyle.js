import styled from 'styled-components';

export const Menu = styled.div`
	position: absolute;
	top: 70px;
	right: 80px;
	width: 240px;
	box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
	border-radius: 12px;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 8px 0;
`
export const Link = styled.a`
	padding: 12px 16px;
	text-decoration: none;
	font-size: 14px;
	font-weight: 300;
	&:hover {
		background-color: rgb(247, 247, 247);
	}
	&:nth-child(1) {
		font-weight: 500;
	}
`
export const Divider = styled.div`
	height: 1px;
	background-color: rgb(221, 221, 221);
	margin: 8px 0;
`