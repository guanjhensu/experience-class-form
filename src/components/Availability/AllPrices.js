import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../../icons/close.svg';

const Prices = styled.div`
	box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
	background-color: white;
	border-radius: 12px;
	width: 400px;
	height: 400px;
	position: absolute;  // relative to Price Element in AvailabilityStyled.js
	right: 220px;
`
const Header = styled.div`
	display: flex;
	padding: 24px;
	border-bottom: 1px solid rgb(235, 235, 235);
	& button {
		display: inline-block;
		position: relative;
		z-index: 0;
		img {
			width: 10px;
			height: 10px;
		}
	}
	& button::after {
		content: '';
		width: 32px;
		height: 32px;
		position: absolute;
		top: -8px;
    left: -10px;
    border-radius: 50%;
		z-index: -1;
	}
	& button:hover::after {
		background-color: rgb(247, 247, 247);	
	}
	& div {
		display: inline-block;
		text-align: center;
		flex-grow: 1;
		font-size: 16px;
		font-weight: bold;
	}
`

function AllPrices() {
	const [ show, setShow ] = useState(true);
	
	return (
		<> {show && 
			<Prices>
				<Header>
					<button onClick={() => setShow(false)}><img src={close} alt="close"/></button>
					<div>Price breakdown</div>
				</Header>
			</Prices>}
		</>
	)
}

export default AllPrices;