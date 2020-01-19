import React from 'react';
import './App.css';
import './CSS/main.scss';
import HexagonImageBanner from './components/HexagonImageBanner';
import TopNavigationBar from './components/TopNavigationBar';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <HexagonImageBanner />
      <PetInfo />
    </div>
  );
}

export default App;
