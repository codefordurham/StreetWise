import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import Sheet from './Sheet';

function App() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!location) return;

    fetch(`/qpa/api/results?address=${encodeURIComponent(location.description)}`)
      .then((result) => {
        if (!result.ok) {
          throw new Error('HTTP Error: '+ result.status);
        }
        return result.json();
      })
      .then(setData)
      .catch((error) => {
        console.log("|error = "+ error);
      });
  }, [location]);

  if (location) {
    return (
      <div className="App">
        <Sheet data={data} />
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
