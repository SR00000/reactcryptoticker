import React from 'react';
import './App.css';
import CoinGecko from './components/hooks/CoinGeckoGrab';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <CoinGecko />
    </div>
  );
}

export default App;