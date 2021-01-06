import React from 'react';
import online from '../../icons/online.svg';
import star from '../../icons/star.svg';
import styled from 'styled-components';

const OnlineExperience = styled.div`
	display: flex;
	align-items: center;
	margin-top: 48px;
	& img {
		width: 16px;
		height: 16px;
		margin-right: 4px;
		display: inline-block;
	}
	& span {
		font-size: 12px;
		text-transform: uppercase;
		font-weight: bold;
	}
`
const ClassTitle = styled.h1`
	font-size: 26px;
	font-weight: 500;
	letter-spacing: 1px;
	margin-bottom: 4px;
`
const Info = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 48px;
	& span {
		font-size: 14px;
	}
	& span a {
		font-weight: bold;
	}
`
const Rating = styled.button`
	background-color: transparent;
	border: none;
	height: 20px;
	display: inline-flex;
	align-items: center;
	img {
		display: inline-block;
		height: 80%;
		margin-right: 4px;
	}
	& span:nth-of-type(1) {
		font-weight: bold; 
	}
	& span:nth-of-type(2) {
		margin-left: 4px;
	}
`
const Divider = styled.span`
	margin: 0 8px;
`


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
				<Divider>·</Divider>
				<span><a href='/'>{location}</a></span>
				<Divider>·</Divider>
				<span>Part of <a href='/'>{category}</a></span>
			</Info>
		</>
	)
}

export default Title;