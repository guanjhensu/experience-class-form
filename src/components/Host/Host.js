import React, { useContext } from 'react';
import HeadshotContext from '../Headshot/HeadshotContext';
import user from '../../icons/user.svg';
import verified from '../../icons/verified.svg';
import star from '../../icons/star.svg';
import protect from '../../icons/protect.svg';


import styled from 'styled-components';

const HostInfo = styled.div`
	padding: 48px calc(100%/18);
	& div:nth-child(1) {
		height: 56px;
		display: flex;
		align-items: center;
		margin-bottom: 24px;
		a {
			display: inline-block;
			width: 56px;
			margin-right: 16px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 100%;
			}
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			h1 {
				font-size: 22px;
				font-weight: 500;
			}
			p {
				font-size: 14px;
				color: #717171;
			}
		}
	}
	& div:nth-child(2) {
		height: 24px;
		display: flex;
		margin-bottom: 12px;
		font-size: 16px;
		font-weight: 300;
		span {
			padding: 0 12px 0 0;
			display: flex;
			align-items: center;
				img {
				height: 16px;
				object-fit: cover;
				margin-right: 8px;
			}
		}
		& span:nth-child(2) {
			padding-left: 12px;
		}
	}
	& p {
		font-weight: 300;
		font-size: 16px;
		line-height: 24px;
	}
	& div:nth-child(4) {
		margin-top: 32px;
		display: inline-flex;
		align-items: center;
		a {
			border: 1px solid black;
			padding: 13px 23px;
			border-radius: 8px;
			text-decoration: none;
			font-weight: bold;
		}
		span {
			margin-left: 36px;
			font-size: 12px;
			font-weight: 300;
			height: 24px;
			display: inline-flex;
			align-items: center;
			img {
				width: 22px;
				height: 22px;
				margin-right: 16px;
			}
			a {
				text-decoration: underline;
				border: none;
				padding: 0 0 0 3px;
			}
		}
	}
`

const Divider = styled.div`
	height: 1px;
	width: 90%;
	display: block;
	margin: 0 auto;
	background-color: #dddddd;
`

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