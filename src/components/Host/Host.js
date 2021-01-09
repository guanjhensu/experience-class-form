import React, { useContext } from 'react';
import HeadshotContext from '../Headshot/HeadshotContext';
import { Divider, HostInfo } from './HostStyle';
import user from '../../icons/user.svg';
import verified from '../../icons/verified.svg';
import star from '../../icons/star.svg';
import protect from '../../icons/protect.svg';

function Host({ host }) {
	const { hostName, year } = host;
	const { data } = useContext(HeadshotContext);

	return (
		<>
			<Divider></Divider>
			<HostInfo>
				<div>
					<a href='/'>
						{ (!data) ? <img src={user} alt='default host' />
					 : <img src={data.response.urls.thumb} alt='host' /> }
					</a>
					<div>
						<h1>Meet your host, {hostName}</h1>
						<p>Host on Airbnb since {year}</p>
					</div>
				</div>
				<div>
					<span><img src={star} alt='star' />12 Reviews</span>
					<span><img src={verified} alt='verified' />Identity verified</span>
				</div>
				<p>I am a visual artist specialized in painting and drawing, currently pursuing a PhD in visual arts. My work is mainly figurative and I am inspired by everything that surrounds me, especially nature and its wide range of forms. I love sharing my work and experience with other people!</p>
				<div>
					<a href='/'>Contact host</a>
					<span><img src={protect} alt='protect'/>To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <a href='/'>Learn more</a></span>
				</div>
			</HostInfo>
			<Divider></Divider>
		</>
	)
}

export default Host;