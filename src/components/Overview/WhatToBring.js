import React, { useContext } from 'react';
import ModalContext from '../Modal/ModalContext';

function WhatToBring() {

	const { handleModal } = useContext(ModalContext);

	return (
		<>
			<h2>What to bring</h2>
			<ul>
				<li>paper (more sheets, preferably watercolor paper which is a bit thicker, suggested size A5)</li>
				<li>pressed leaves</li>
				<li>white glue</li>
				<li>water cup</li>
				<li>paints (you can use watercolor, tempera, acrylic, ink, pen..., most of these materials will do)</li>
			</ul>
			<button onClick={() => handleModal('show me what to bring~~~', 'small')}>Show all > </button>
		</>
	)
}

export default WhatToBring;