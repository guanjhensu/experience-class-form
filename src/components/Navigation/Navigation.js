import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Logo = styled.img`
	width: 50px;
	height: 50px;
`

function Navigation() {
	return (
		<Logo src={logo} alt='logo' />
	)
}

export default Navigation;