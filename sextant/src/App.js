import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Public IP Address">
        <p>Placeholder for IP address</p>
      </Exhibit>
      <Exhibit heading="Latency Metrics">
        <p>Placeholder for latency</p>
      </Exhibit>
    </div>
  );
}

export default App;
