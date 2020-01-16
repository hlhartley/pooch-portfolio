import React from 'react';
import './App.css';
import './CSS/main.scss';
import HexagonImageBanner from './components/HexagonImageBanner';
import TopNavigationBar from './components/TopNavigationBar';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <HexagonImageBanner />
      <div>
        BODY
      </div>
    </div>
  );
}

export default App;
