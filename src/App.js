import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
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
      <div className={styles.container}>
        <Sheet data={data} address={location.description}/>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Streetwise</h1>
      <Search
        onLocationChange={(location) => setLocation(location)}
      />
    </div>
  );
}

export default App;
