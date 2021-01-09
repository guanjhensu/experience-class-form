import React from 'react';
import { AvailabilityStyled, TimeTable, Price, DateSelection, Choose, More } from './AvailabilityStyle';
import arrowDown from '../../icons/arrowDown.svg';

function Availability({ price, privateGroup, dates }) {
	return (
		<AvailabilityStyled>
			<TimeTable>
				<Price>
					<span>From €{price.eachGuest}</span>
					<span>/ person</span>
					<button>Show all prices</button>
				</Price>
				<DateSelection>
					<button>
						<div>
							<h5>DATES</h5>
							<p>Add dates</p>
						</div>
						<img src={arrowDown} alt='add dates'/>
					</button>
					<button>
						<div>
							<h5>GUESTS</h5>
							<p>1 guest</p>
						</div>
						<img src={arrowDown} alt='add dates'/>
					</button>
				</DateSelection>
				{
					dates.slice(0, 3).map((date, i)=>{
						return (
							<Choose key={i}>
								<div>
									<p>{date.date}</p>
									<p>{date.time}</p>
									{ privateGroup.available && <a href='/'>Book for a private group</a> }
								</div>
								<div>
									<div>
										<span>€{price.eachGuest}</span>
										<span> / person</span>
									</div>
									<a href='/'>Choose</a>
								</div>
							</Choose>
						)
					})
				}
				<More><a href='/'>See more dates</a></More>
			</TimeTable>
		</AvailabilityStyled>
	)
}

export default Availability;