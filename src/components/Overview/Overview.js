import React from 'react';
import Title from './Title';
import WhatToBring from './WhatToBring';
import styled from 'styled-components';

const OverviewStyled = styled.div`
	/*background-color: red;*/
	width: calc((100% / 3) * 2);
	display: inline-block;
`

function Overview({ info }) {
	return (
		<OverviewStyled>
			<div style={{ padding: `0px calc(100%/12)` }}>
				<Title 
	    		classTitle={info.classTitle}
	    		rating={info.rating}
	    		numberOfReviews={info.numberOfReviews}
	    		location={info.location}
	    		category={info.category}
	    	/>
	    	<WhatToBring />
			</div>
		</OverviewStyled>
	)
}

export default Overview;