import React, { useState } from 'react';
import { Nav, Logo, Content, LanguageChoiceButton, User } from './NavigationElements';
import logo from './logo.svg';
import languageIcon from './language.svg';
import menu from './menu.svg';
import user from './user.svg';
import LanguageModal from './LanguageModal';

function Navigation() {
	const [ show, setShow ] = useState(false);

	return (
		<Nav>
			<Logo><a href='/'><img src={logo} alt='logo'/>airbnb</a></Logo>
			<Content>
				<a href='/' target="_blank" rel="noopener noreferrer">Become a host</a>
				<LanguageChoiceButton 
					type='button' onClick={ () => setShow(!show) } 
					languageIcon={languageIcon} />
				<LanguageModal 
					show={show} closeModal={ () => setShow(false) } />
				<User>
					<div><img src={menu} alt='menu'/></div>
					<div><img src={user} alt='user'/></div>
				</User>
			</Content>
		</Nav>
	)
}

export default Navigation;