import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 500;	
	margin-top: 48px;
	margin-bottom: 24px;
`
export const Explanation = styled.p`
	height: ${props => props.expand ? 'auto' : '120px' };
	margin-bottom: ${props=>props.expand ? '48px': '0'};
	overflow: hidden;
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
`
export const ReadMore = styled.button`
	display: ${props => props.appear ? 'block' : 'none' };
	background: none;
	border: none;
	text-decoration: underline;
	cursor: pointer;
	font-size: 16px;
	margin-bottom: 48px;
	margin-top: 5px;
`
