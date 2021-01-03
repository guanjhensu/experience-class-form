import React from 'react';
import { Menu, Link, Divider } from './NavUserMenuStyle';

function NavUserMenu({ show }) {
	let showOrNot = show ? {} : { display: 'none' };

	return (
		<Menu style={showOrNot}>
			{/* TODO: redirect to other page */}
			<Link href='/'>Sign up</Link>
			<Link href='/'>Log in</Link>
			<Divider />
			<Link href='/'>Host your home</Link>
			<Link href='/'>Host an experience</Link>
			<Link href='/'>Help</Link>
		</Menu>
	)
}

export default NavUserMenu;