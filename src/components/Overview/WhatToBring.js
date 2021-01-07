import React, { useContext } from 'react';
import ModalContext from '../Modal/ModalContext';
import { Title, Lists, ShowAll, ModalStyle } from './WhatToBringStyle';
import check from '../../icons/check.svg';
import arrowRight from '../../icons/arrowRight.svg';

function WhatToBring() {
	const { handleModal } = useContext(ModalContext);

	return (
		<>
			<Title>What to bring</Title>
			<Lists>
				<li><img src={check} alt='check' /><span>paper (more sheets, preferably watercolor paper which is a bit thicker, suggested size A5)</span></li>
				<li><img src={check} alt='check' /><span>pressed leaves</span></li>
				<li><img src={check} alt='check' /><span>white glue</span></li>
				<li><img src={check} alt='check' /><span>water cup</span></li>
				<li><img src={check} alt='check' /><span>paints (you can use watercolor, tempera, acrylic, ink, pen..., most of these materials will do)</span></li>
			</Lists>
			<ShowAll onClick={() => handleModal(<Description />)}>Show all <img src={arrowRight} alt='show more'/></ShowAll>
		</>
	)
}

function Description() {
	return (
		<ModalStyle>
			<h1>What to bring</h1>
			<Lists>
				<li><img src={check} alt='check' /><span>paper (more sheets, preferably watercolor paper which is a bit thicker, suggested size A5)</span></li>
				<li><img src={check} alt='check' /><span>pressed leaves</span></li>
				<li><img src={check} alt='check' /><span>white glue</span></li>
				<li><img src={check} alt='check' /><span>water cup</span></li>
				<li><img src={check} alt='check' /><span>paints (you can use watercolor, tempera, acrylic, ink, pen..., most of these materials will do)</span></li>
				<li><img src={check} alt='check' /><span>pencil</span></li>
				<li><img src={check} alt='check' /><span>rubber</span></li>
				<li><img src={check} alt='check' /><span>brushes (thinner ones mostly, but the thicker ones can also work)</span></li>
			</Lists>
		</ModalStyle>
	)
}

export default WhatToBring;