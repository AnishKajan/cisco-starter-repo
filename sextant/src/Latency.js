// src/Latency.js
import React, { useEffect, useState } from 'react';

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');

    socket.onmessage = (event) => {
      const packet = JSON.parse(event.data);
      const packetTimestamp = packet.timestamp;
      const now = Date.now();
      const latency = now - packetTimestamp;
      setLatency(latency);
    };

    socket.onerror = (err) => {
      console.error('WebSocket error:', err);
    };

    return () => socket.close();
  }, []);

  return (
    <p>
      {latency !== null ? `Latency: ${latency} ms` : 'Waiting for latency data...'}
    </p>
  );
}

export default Latency;
