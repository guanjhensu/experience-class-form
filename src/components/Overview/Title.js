import React from 'react';
import { OnlineExperience, ClassTitle, Info, Rating, Interpunct } from './TitleStyle';
import online from '../../icons/online.svg';
import star from '../../icons/star.svg';

function Title({classTitle, rating, numberOfReviews, location, category}) {
	return (
		<>
			<OnlineExperience>
				<img src={online} alt='online-experience' />
				<span>online experience</span>
			</OnlineExperience>
			<ClassTitle>{classTitle}</ClassTitle>
			<Info>
				<span>
				<Rating>
					<img src={star} alt='rating' />
					<span>{rating.toFixed(1)}</span>
					<span>{`(${numberOfReviews})`}</span>
				</Rating>
				</span>
				<Interpunct>·</Interpunct>
				<span><a href='/'>{location}</a></span>
				<Interpunct>·</Interpunct>
				<span>Part of <a href='/'>{category}</a></span>
			</Info>
		</>
	)
}

export default Title;