import React from 'react';
import './App.css';
import './CSS/main.scss';
import HexagonImageBanner from './components/HexagonImageBanner';
import TopNavigationBar from './components/TopNavigationBar';
import PetInfo from './components/PetInfo';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <HexagonImageBanner />
      <PetInfo />
      <PhotoGallery />
    </div>
  );
}

export default App;
