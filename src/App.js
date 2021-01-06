import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';
import WhatToBring from './components/Overview/WhatToBring';

import { ModalProvider } from './components/Modal/ModalContext';
import Modal from './components/Modal/Modal';

function App() {
  return (
  	<ModalProvider>
  		<Modal />
	    <div>
	      <Navigation />
	      <main>
	      	<ImageGrid />
	      	<WhatToBring />
	      </main>
	    </div>
    </ModalProvider>
  );
}

export default App;