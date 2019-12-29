import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Sheet from './Sheet';

function App() {
  const [location, setLocation] = useState(null);

  if (location) {
    return (
      <div className="App">
        <Sheet
          address={location.description}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Search
        onLocationChange={(location) => setLocation(location)}
      />
    </div>
  );
}

export default App;
