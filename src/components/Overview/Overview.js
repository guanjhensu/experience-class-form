import React from 'react';
import { OverviewStyled, Divider } from './OverviewStyle';
import Title from './Title';
import BasicInfo from './BasicInfo';
import WhatToDo from './WhatToDo';
import HowToParticipate from './HowToParticipate';
import WhatToBring from './WhatToBring';


function Overview({ info }) {
	return (
		<OverviewStyled>
			<div style={{ padding: `0 calc(100%/6) 0 calc(100%/10)` }}>
				<Title 
	    		classTitle={info.classTitle}
	    		rating={info.rating}
	    		numberOfReviews={info.numberOfReviews}
	    		location={info.location}
	    		category={info.category}
	    	/>
	    	<Divider></Divider>
	    	<BasicInfo 
	    		host={info.host}
	    		basicInfo={info.basicInfo}
	    	/>
	    	<Divider></Divider>
	    	<WhatToDo />
	    	<Divider></Divider>
	    	<HowToParticipate 
	    		host={info.host}
	    		privateGroup={info.basicInfo.privateGroup}
	    	/>
	    	<Divider></Divider>
	    	<WhatToBring />
	    	<Divider></Divider>
			</div>
		</OverviewStyled>
	)
}

export default Overview;