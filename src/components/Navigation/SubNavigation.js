import React from 'react';
import share from '../../icons/share.svg';
import heart from '../../icons/heart.svg';
import styled from 'styled-components';

const SubNav = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px calc(100%/18);
	& div:nth-child(1) a {
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
	return (
		<SubNav>
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