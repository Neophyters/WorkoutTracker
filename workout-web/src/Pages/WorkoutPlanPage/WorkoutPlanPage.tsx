import React, { FC } from 'react';
import WorkoutDay from '../../components/WorkoutDay';
import './WorkoutPlanPage.css'; // Import your CSS file for styling
import { Button } from 'react-bootstrap';

interface WorkoutPlanPageProps {}

const WorkoutPlanPage: FC<WorkoutPlanPageProps> = () => {
  // Array of day names
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Weekly Workout Plan</h1>
      <div className="workout-plan-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <h1>{day}</h1>
            <Button>Edit Day</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanPage;
