import styled from 'styled-components';

const getNavStyle = (type) => {
	switch(type) {
		case 'first': return { 
			position: 'static',
			backgroundColor: 'transparent',
			boxShadow: '',
			padding: '32px calc(100%/18)',
			displayAnchorLink: '',
			displayButton: 'none',
			rightDivMarginRight: '0' 
		};
		case 'second': return { 
			position: 'sticky',
			backgroundColor: 'white',
			boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.18)',
			padding: '0 calc(100%/18)',
			displayAnchorLink: 'none',
			displayButton: '',
			rightDivMarginRight: '48px'
		};
		// case 'third': return { backgroundColor: 'blue' };
		default: return { backgroundColor: 'red' };
	}
}

export const SubNav = styled.nav`
	z-index: 1;
	position: ${props=> getNavStyle(props.subNav).position };
	top: 0;
	background-color: ${props=> getNavStyle(props.subNav).backgroundColor };
	box-shadow: ${props=> getNavStyle(props.subNav).boxShadow };
	padding: ${props=> getNavStyle(props.subNav).padding };
	@media (max-width: 744px) {
		padding: 20px 16px;
		position: sticky;
		top: 0;
		background-color: white;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	& div:nth-child(1) a:nth-of-type(1) {
		display: ${props=> getNavStyle(props.subNav).displayAnchorLink };
		font-size: 14px;
		color: rgb(34, 34, 34);
		@media (max-width: 744px) {
			display: none;
		}
	}
	& div:nth-child(1) a:nth-of-type(2) {
		display: none;
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
		img {
			width: 14px;
			height: 14px;
			padding: 0 8px;
		}
		@media (max-width: 744px) {
			display: inline-flex;
			align-items: center;
		}
	}
	& div:nth-child(1) button {
		display: ${props=> getNavStyle(props.subNav).displayButton };
		@media (max-width: 744px) {
			display: none;
		}
		height: 80px;
		margin-right: 24px;
		font-size: 14px;
		position: relative;
	}
	& div:nth-child(1) button:hover::after {
		opacity: 1;
	}
	& div:nth-child(1) button::after {
		content: '';
		display: block;
		width: 100%;
		height: 4px;
		background-color: #222222;
		position: absolute;
		bottom: 0;
		opacity: 0;
		transition: opacity 0.15s ease;
	}
	& div:nth-child(2) {
		display: flex;
		flex-direction: row;
		margin-right: ${props=>getNavStyle(props.subNav).rightDivMarginRight };
		button {
			font-size: 14px;
			@media (max-width: 744px) {
				font-size: 0;
			}
			padding: 4px 8px;
			display: flex;
			position: relative;
			text-decoration: underline;
			img {
				width: 16px;
				height: 16px;
				margin-right: 8px;
				@media (max-width: 744px) {
					margin-right: 0;
				}
			}
		}
	}
	& div:nth-child(2) button:hover::before {
		content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 8px;
    background-color: rgb(247, 247, 247);
    @media (max-width: 744px) {
			border-radius: 100%;
		}
	}
`