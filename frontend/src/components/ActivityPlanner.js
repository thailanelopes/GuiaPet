import React, { useEffect, useState } from 'react';
import { getActivities } from '../api/api';

function ActivityPlanner() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      const activities = await getActivities();
      setActivities(activities);
    }

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activity Planner</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <ul>
              {activity.tutorials.map((tutorial, index) => (
                <li key={index}>{tutorial}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityPlanner;
