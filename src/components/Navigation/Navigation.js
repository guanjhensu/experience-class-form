import React, { useState, useRef, useContext } from 'react';
import { Nav, Logo, Content, LanguageChoiceButton, UserButton } from './NavigationStyle';
import ModalContext from '../Modal/ModalContext';
import Choice from '../Language/Choice';
import NavUserMenu from './NavUserMenu';
import useOutsideClick from '../../hooks/useOutsideClick';
import logo from '../../icons/logo.svg';
import menu from '../../icons/menu.svg';
import user from '../../icons/user.svg';
import languageIcon from '../../icons/language.svg';

function Navigation() {
	const { handleModal } = useContext(ModalContext);
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
					<a href='/' target='_blank' rel='noopener noreferrer'>Become a host</a>
					<LanguageChoiceButton 
						type='button' onClick={() => handleModal(<Choice />)} 
						languageIcon={languageIcon} />
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