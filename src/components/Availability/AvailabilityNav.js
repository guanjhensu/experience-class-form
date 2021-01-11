import React from 'react';
import { Price } from './AvailabilityStyle';
import { Nav } from './AvailabilityNavStyle';

function AvailabilityNav({ price }) {
	return (
		<Nav>
			<Price>
				<span>From €{price.eachGuest}</span>
				<span>/ person</span>
				<button>Show all prices</button>
			</Price>
			<a href='/'>See dates</a>
		</Nav>
	)
}

export default AvailabilityNav;