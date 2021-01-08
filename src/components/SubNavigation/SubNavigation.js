import React, { useState, useEffect } from 'react';
import share from '../../icons/share.svg';
import heart from '../../icons/heart.svg';
import styled from 'styled-components';

const SubNav = styled.nav`
	position: sticky;
	top: 0;
	background-color: ${props=>props.showSecondSubNav ? 'white' : ''};
	z-index: ${props=>props.showSecondSubNav ? '1' : '0'};
	box-shadow: ${props=>props.showSecondSubNav ? '0px 1px 2px rgba(0, 0, 0, 0.18)' : ''};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px calc(100%/18);
	& div:nth-child(1) a {
		display: ${props=>props.showSecondSubNav ? 'none' : ''};
		font-size: 14px;
		color: rgb(34, 34, 34);
	}
	& div:nth-child(2) {
		display: flex;
		flex-direction: row;
		button {
			background: none;
			border: none;
			cursor: pointer;
			font-size: 14px;
			padding: 4px 8px;
			display: flex;
			position: relative;
			img {
				width: 16px;
				height: 16px;
				margin-right: 8px;
			}
		}
	}
	& button:hover::before {
		content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 8px;
    background-color: rgb(247, 247, 247);
	}
`

function SubNavigation() {

	const [ secondSubNav, setSecondSubNav ] = useState(false);

	const handleScroll = () => {
		const currentPosition = window.pageYOffset;
		const mainContentPosition = document.getElementById('mainContent').offsetTop;
		setSecondSubNav(currentPosition >= mainContentPosition - 88);
	}

	useEffect(()=>{
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, [secondSubNav]);

	return (
		<SubNav showSecondSubNav={secondSubNav}>
			<div>
				<a href='/'>All online experiences</a>
			</div>
			<div>
				<button><img src={share} alt='share' />Share</button>
				<button><img src={heart} alt='save' />Save</button>
			</div>
		</SubNav>
	)
}

export default SubNavigation;