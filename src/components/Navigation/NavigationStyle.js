import styled from 'styled-components';

export const Nav = styled.nav`
	height: 80px;
	/*padding: 0 80px;*/
	padding: 0 calc(100%/18) 0 calc(100%/22);
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`
export const Logo = styled.div`
	width: 50px;
	height: 50px;
	& a {
		display: flex;
		align-items: center;
		height: 100%;
		text-decoration: none;
		font-size: 25px;
		color: #61dafb;
		font-weight: bold;
	}
	& a img {
		width: 100%;
	}
`
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	&>a {
		position: relative;
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		padding-right: 12px;
	}
	&>a:hover::before {
		content: "";
    position: absolute;
    top: -12px;
    bottom: -12px;
    left: -15px;
    right: 0px;
    z-index: -1;
    border-radius: 22px;
    background-color: rgb(247, 247, 247);
	}
`
export const LanguageChoiceButton = styled.button`
	background: transparent url(${props => props.languageIcon|| ""});
	background-size: cover;
	width: 16px;
	height: 16px;
	margin: 0 24px 0 12px;
	position: relative;
	&:hover::before {
		content: "";
    position: absolute;
    top: -12px;
    bottom: -12px;
    left: -15px;
    right: -15px;
    z-index: -1;
    border-radius: 22px;
    background-color: rgb(247, 247, 247);
	}
`
export const UserButton = styled.button`
	display: flex;
	align-items: center;
	border: 1px solid #DDDDDD;
	border-radius: 21px;
	background: transparent;
	height: 42px;
	padding: 5px 6px 5px 12px;
	& div:nth-child(1) {
		width: 16px;
	}
	& div:nth-child(2) {
		width: 30px;
		margin-left: 12px;
	}
	& div img {
		width: 100%;
	}
	&:hover {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
		transition: box-shadow 0.2s ease;
	}
`