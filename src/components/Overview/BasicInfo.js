import React, { useEffect, useContext } from 'react';
import { Infos, Title, Info } from './BasicInfoStyle';
import HeadshotContext from '../Headshot/HeadshotContext';
import user from '../../icons/user.svg';
import time from '../../icons/time.svg';
import people from '../../icons/people.svg';
import computer from '../../icons/computer.svg';
import message from '../../icons/message.svg';

function BasicInfo({ host, students, privateGroup, basicInfo }) {
	const { hostName, hostPhotoID } = host;
	const { available, limit } = privateGroup;
	const { duration, devices, languages } = basicInfo;

	const { data, getHeadshot } = useContext(HeadshotContext);

	useEffect(() => {
		getHeadshot(hostPhotoID);
	}, []);

	return (
		<Infos>
			<Title>
				<h1>Online experience hosted by {hostName}</h1>
				<a href='/'>
					{ (!data) ? <img src={user} alt='default host' />
				 : <img src={data.response.urls.thumb} alt='host' /> }
				</a>
			</Title>
			<Info>
				<div>
					<img src={time} alt='duration' />
					<p>{duration} hours</p>
				</div>
				<div>
					<img src={people} alt='people limit' />
					<p> 
						{ (available) ? 
								`Up to ${students} people. Private groups available for up to ${limit}`
								 : `Up to ${students} people.`}
					</p>
				</div>
				<div>
					<img src={computer} alt='devices' />
					<p>Join from your {devices.map((device, i, arr)=>{
						return (i === arr.length-1) ? `or ${device}` : `${device}, `;
					})}</p>
				</div>
				<div>
					<img src={message} alt='languages' />
					<p>Hosted in {languages.map((language, i, arr)=>{
						return (i === arr.length-1) ? `${language}` : `${language}, `;
					})}</p>
				</div>
			</Info>
		</Infos>
	)
}

export default BasicInfo;