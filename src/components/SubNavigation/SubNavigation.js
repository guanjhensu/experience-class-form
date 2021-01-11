import React, { useState, useEffect } from 'react';
import { SubNav } from './SubNavigationStyle';
import share from '../../icons/share.svg';
import heart from '../../icons/heart.svg';
import arrowLeft from '../../icons/arrowLeft.svg';

function SubNavigation() {

	const navStyle = { first: 'first', second: 'second', third: 'third' };

	const [ subNav, setsubNav ] = useState(navStyle.first);

	const handleScroll = () => {
		const currentPosition = window.pageYOffset;
		const mainContentPosition = document.getElementById('mainContent').offsetTop;
		if(currentPosition < mainContentPosition) setsubNav(navStyle.first);
		if(currentPosition >= mainContentPosition) setsubNav(navStyle.second);
		// if(currentPosition >= 1000) setsubNav(navStyle.third);
	}

	useEffect(()=>{
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	});

	return (
		<SubNav subNav={subNav}>
			<div>
				<a href='/'>All online experiences</a>
				<a href='/'><img src={arrowLeft} alt='experiences' />Experiences</a>
				<button>Overview</button>
				<button>The host</button>
				<button>Reviews</button>
				<button>Availability</button>
			</div>
			<div>
				<button><img src={share} alt='share' />Share</button>
				<button><img src={heart} alt='save' />Save</button>
			</div>
		</SubNav>
	)
}

export default SubNavigation;