import React from 'react';
import { Nav, Logo, Content, LanguageChoice, User } from './NavigationElements';
import logo from './logo.svg';
import languageIcon from './language.svg';
import menu from './menu.svg';
import user from './user.svg';

function Navigation() {
	return (
		<Nav>
			<Logo><a href='/'><img src={logo} alt='logo'/>airbnb</a></Logo>
			<Content>
				<a href='/' target="_blank" rel="noopener noreferrer">Become a host</a>
				<LanguageChoice languageIcon={languageIcon}/>
				<User>
					<div><img src={menu} alt='menu'/></div>
					<div><img src={user} alt='user'/></div>
				</User>
			</Content>
		</Nav>
	)
}

export default Navigation;