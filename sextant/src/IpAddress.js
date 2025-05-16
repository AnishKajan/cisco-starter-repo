import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IpAddress({ version }) {
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const url =
          version === 'ipv6'
            ? 'https://api64.ipify.org?format=json'
            : 'https://api.ipify.org?format=json';
        const response = await axios.get(url);
        setIp(response.data.ip);
      } catch (error) {
        setIp('Error fetching IP');
      }
    };

    fetchIp();
  }, [version]);

  return <p>{ip}</p>;
}

export default IpAddress;
