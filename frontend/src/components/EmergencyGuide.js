import React, { useEffect, useState } from 'react';
import { getEmergencies } from '../api/api';

function EmergencyGuide() {
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    async function fetchEmergencies() {
      const emergencies = await getEmergencies();
      setEmergencies(emergencies);
    }

    fetchEmergencies();
  }, []);

  return (
    <div>
      <h1>Emergency Guide</h1>
      <ul>
        {emergencies.map((emergency) => (
          <li key={emergency._id}>
            <h2>{emergency.title}</h2>
            <p>{emergency.description}</p>
            <ul>
              {emergency.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmergencyGuide;
