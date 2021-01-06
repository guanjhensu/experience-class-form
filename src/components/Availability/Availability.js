import React from 'react';
import styled from 'styled-components';

const TimeTable = styled.div`
	background-color: green;
	width: calc(100% / 3);
	display: inline-block;
`

function Availability() {
	return (
		<TimeTable>
			<div style={{ padding: `0 calc(100%/12)` }}>
				Availability
			</div>
		</TimeTable>
	)
}

export default Availability;