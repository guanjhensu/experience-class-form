import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Overview from './components/Overview/Overview';
import Availability from './components/Availability/Availability';
import { ModalProvider } from './components/Modal/ModalContext';
import Modal from './components/Modal/Modal';

import styled from 'styled-components';

const MainContent = styled.div`
	display: grid;
	grid-template-columns: 5fr 3fr;
	margin-top: 12px;
`

function App() {
	const [ info ] = useState({  // TODO: info should fetch from DB in the future
		classTitle: 'Archaeology of Leaves Art Experience',
		rating: 5.0,
		numberOfReviews: 12,
		location: 'Madrid, Spain',
		category: 'Field Trips Online Experiences',
		host: {
			hostName: 'Ana',
			hostPhotoID: 'DpGNQtyILXI'
		},
		students: 5,
		privateGroup: {
			available: true,
			limit: 7
		},
		price: {
			eachGuest: 25,
			eachGroup: 100
		},
		dates: [
			{ date: 'Sat, Jan 9', time: '1:00 AM - 3:00 AM (CST)'},
			{ date: 'Tue, Jan 12', time: '1:00 AM - 3:00 AM (CST)'},
			{ date: 'Sat, Jan 16', time: '1:00 AM - 3:00 AM (CST)'},
		],
		basicInfo: {
			duration: 2,
			languages: ['English', 'Spanish', 'Serbian'],
			devices: ['computer', 'phone', 'tablet']
		}
	});

  return (
  	<ModalProvider>
  		<Modal />
	    <div>
	      <Navigation />
	      <main>
	      	<ImageGrid />
	      	<MainContent>
	      		<Overview info={info} />
	      		<Availability price={info.price} privateGroup={info.privateGroup} dates={info.dates} />
	      	</MainContent>
	      </main>
	    </div>
    </ModalProvider>
  );
}

export default App;