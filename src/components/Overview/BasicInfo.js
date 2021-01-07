import React, { useState, useEffect } from 'react';
import UnsplashAPI from '../../api/UnsplashAPI';
import { Title, Info } from './BasicInfoStyle';
import user from '../../icons/user.svg';
import time from '../../icons/time.svg';
import people from '../../icons/people.svg';
import computer from '../../icons/computer.svg';
import message from '../../icons/message.svg';

function BasicInfo({ host, basicInfo }) {
	const { hostName, hostPhotoID } = host;
	const { duration, students, privateGroup, devices, languages } = basicInfo;

	const [ hostPhoto, setHostPhoto ] = useState(null);

	useEffect(() => {
		if(hostPhotoID){
			UnsplashAPI.photos.get({ photoId: hostPhotoID })
			.then(result => setHostPhoto(result))
			.catch(() => {
				alert('Something went wrong when loading host image. Check your internet connection.')
			})
		}
	}, [hostPhotoID]);

	return (
		<div style={{ margin: '48px 0 24px 0' }}>
			<Title>
				<h1>Online experience hosted by {hostName}</h1>
				<a href='/'>
					{ (!hostPhoto) ? <img src={user} alt='default host' />
				 : <img src={hostPhoto.response.urls.thumb} alt='host' /> }
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
						{ (privateGroup.available) ? 
								`Up to ${students} people. Private groups available for up to ${privateGroup.limit}`
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
		</div>
	)
}

export default BasicInfo;