import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Public IP Address">
        <IpAddress version="ipv4" />
      </Exhibit>
      <Exhibit heading="Latency Metrics">
        <IpAddress version="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
