import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageGrid from './components/ImageGrid/ImageGrid';

function App() {
  return (
    <div>
      <Navigation />
      <main>
      	<ImageGrid />
      </main>
    </div>
  );
}

export default App;