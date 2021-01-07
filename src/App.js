import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Overview from './components/Overview/Overview';
import Availability from './components/Availability/Availability';
import { ModalProvider } from './components/Modal/ModalContext';
import Modal from './components/Modal/Modal';

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
		basicInfo: {
			duration: 2,
			students: 5,
			privateGroup: {
				available: true,
				limit: 7
			},
			devices: ['computer', 'phone', 'tablet'],
			languages: ['English', 'Spanish', 'Serbian']
		}
	});

  return (
  	<ModalProvider>
  		<Modal />
	    <div>
	      <Navigation />
	      <main>
	      	<ImageGrid />
	      	<Overview info={info} />
	      	<Availability />
	      </main>
	    </div>
    </ModalProvider>
  );
}

export default App;