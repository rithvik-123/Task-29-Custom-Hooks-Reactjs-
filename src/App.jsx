import React from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  // We use the JSONPlaceholder dummy API. I added a limit of 100 so it doesn't try to load 5000 images at once.
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=100');

  // Match the exact Loading screen from the mentor's video
  if (loading) {
    return (
      <div className="status-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Match the exact Error screen if Wi-Fi is disconnected
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
        {data && data.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} loading="lazy" />
            <p className="photo-title">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;