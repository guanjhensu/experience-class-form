import React, { useState, useRef } from 'react';
import { Nav, Logo, Content, LanguageChoiceButton, UserButton } from './NavigationStyle';
import LanguageModal from '../Language/LanguageModal';
import NavUserMenu from './NavUserMenu';
import useOutsideClick from '../../hooks/useOutsideClick';

import logo from './logo.svg';
import menu from './menu.svg';
import user from './user.svg';
import languageIcon from '../Language/language.svg';


function Navigation() {
	const [ showLanguageModal, setShowLanguageModal ] = useState(false);
	const [ showMenu, setShowMenu ] = useState(false);
	
	const ref = useRef(null);
	useOutsideClick(ref, () => {
		if(showMenu) setShowMenu(false);
  });
	
	return (
		<>
			<Nav>
				<Logo><a href='/'><img src={logo} alt='logo'/>airbnb</a></Logo>
				<Content>
					<a href='/' target="_blank" rel="noopener noreferrer">Become a host</a>
					<LanguageChoiceButton 
						type='button' onClick={ () => setShowLanguageModal(!showLanguageModal) } 
						languageIcon={languageIcon} />
					<LanguageModal 
						show={showLanguageModal} closeModal={ () => setShowLanguageModal(false) } />
					<UserButton 
						type='button' onClick={ () => setShowMenu(!showMenu) } >
						<div><img src={menu} alt='menu'/></div>
						<div><img src={user} alt='user'/></div>
					</UserButton>
				</Content>
			</Nav>
			<div ref={ref}>
				<NavUserMenu show={showMenu} />
			</div>
		</>
	)
}

export default Navigation;