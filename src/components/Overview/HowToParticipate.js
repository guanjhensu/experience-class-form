import React, { useContext } from 'react';
import ModalContext from '../Modal/ModalContext';
import computer from '../../icons/computer.svg';
import people from '../../icons/people.svg';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 22px;
	font-weight: 500;	
	margin-top: 48px;
	margin-bottom: 24px;
`
const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-bottom: 48px;
	& div {
		border: 1px solid #dddddd;
		border-radius: 8px;
		padding: 32px 16px 32px 16px;
		img {
			width: 32px;
			height: 32px;
		}
		h3 {
			font-size: 17px;
			font-weight: 500;
			padding-top: 5px;
			padding-bottom: 16px;
		}
		p {
			font-size: 14px;
			font-weight: 300;
			line-height: 18px;
		}
		button {
			margin-top: 16px;
			background: none;
			border: none;
			text-decoration: underline;
			font-size: 16px;
			color: rgb(113, 113, 113);
			cursor: pointer;
		}
	}
`

function HowToParticipate({ host, privateGroup }) {
	const { hostName } = host;
	const { available, limit } = privateGroup;

	const { handleModal } = useContext(ModalContext);

	return(
		<>
			<Title>How to participate</Title>
			<Cards>
				<div>
					<img src={computer} alt='join a video call'/>
					<h3>Join a video call</h3>
					<p>Use Zoom to participate on your desktop or mobile device. After you book you’ll receive an email with a link and details on how to join.</p>
					<button onClick={() => handleModal(<DescriptionModal/>)}>Show more</button>
				</div>
				{	(available) && 
					<div>
						<img src={people} alt='book a private group'/>
						<h3>Book a private group</h3>
						<p>{hostName} can host private groups of any size, up to {limit} guests. Private group rates start at €100.</p>
					</div>
				} 
			</Cards>
		</>
		)
}

const ModalStyle = styled.div`
	& h1 {
		font-size: 26px;
		font-weight: 600;
		margin-top: 40px;
		margin-bottom: 32px;
	}
	& h3 {
		font-size: 16px;
	}
	& p {
		margin-top: 8px;
		font-size: 16px;
		font-weight: 300;
		line-height: 24px;
		a {
			font-weight: 500;
		}
	}
	
`

function DescriptionModal() {
	return (
		<ModalStyle>
			<h1>How to participate</h1>
			<h3>Join a video call</h3>
			<p>Online Experiences are all hosted on the Zoom video conferencing platform. After you book, you’ll receive an email with a link to the experience that you’ll join using a web browser or the Zoom app. Experiences use both audio and video, so check out these <a href='https://support.zoom.us/hc/en-us/articles/201179966'  target='_blank' rel='noopener noreferrer'>system requirements</a> to make sure your device will work.
				<br /><br />
				Video conferencing is interactive, so you’ll be able to communicate with your host and other guests as much or as little as you’d like.
				<br /><br />
				Download Zoom: 
					<a href='https://zoom.us/download' target='_blank' rel='noopener noreferrer'>[Desktop]</a>
					<a href='https://play.google.com/store/apps/details?id=us.zoom.videomeetings' target='_blank' rel='noopener noreferrer'>[Android]</a>
					<a href='https://itunes.apple.com/app/id546505307' target='_blank' rel='noopener noreferrer'>[iOS]</a>
			</p>
		</ModalStyle>
	)
}

export default HowToParticipate;