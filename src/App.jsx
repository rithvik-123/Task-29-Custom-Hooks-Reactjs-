import React from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=100');

  if (loading) {
    return (
      <div className="status-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-screen">
        <p>Error : {error}</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="header-title">Photos</h1>
      
      <div className="photo-grid">
        {data && data.map((photo) => {
          // THE FIX: Extract the color code from the broken URL 
          // and use a reliable image service instead!
          const colorCode = photo.url.split('/').pop();
          const reliableImageUrl = `https://dummyimage.com/600x600/${colorCode}/aaaaaa`;

          return (
            <div key={photo.id} className="photo-card">
              <img src={reliableImageUrl} alt={photo.title} loading="lazy" />
              <p className="photo-title">{photo.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;