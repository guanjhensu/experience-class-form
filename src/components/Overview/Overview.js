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
			<Title 
    		classTitle={info.classTitle}
    		rating={info.rating}
    		numberOfReviews={info.numberOfReviews}
    		location={info.location}
    		category={info.category}
    	/>
    	<Divider />
    	<BasicInfo 
    		host={info.host}
            students={info.students}
            privateGroup={info.privateGroup}
    		basicInfo={info.basicInfo}
    	/>
    	<Divider />
    	<WhatToDo />
    	<Divider />
    	<HowToParticipate 
    		host={info.host}
    		privateGroup={info.privateGroup}
            price={info.price}
    	/>
    	<Divider />
    	<WhatToBring />
		</OverviewStyled>
	)
}

export default Overview;