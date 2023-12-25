import React, { FC, useState } from 'react';
import WorkoutDay from '../../components/WorkoutDay';
import './WorkoutPlanPage.css'; // Import your CSS file for styling
import { Button } from 'react-bootstrap';

interface WorkoutPlanPageProps {}

const WorkoutPlanPage: FC<WorkoutPlanPageProps> = () => {
  // Array of day names
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  //make a react hook to show true or false of a state
  const [isPopUp, setIsPopUp] = useState(false);

  // Function to edit the day
  const editDay = () => {
    setIsPopUp(true);
  };

  // Function to close the pop up
  const closePopUp = () => {
    setIsPopUp(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Weekly Workout Plan</h1>
      <div className="workout-plan-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <h1>{day}</h1>
            <Button onClick={editDay}>Edit Day</Button>
          </div>
        ))}
      </div>
      {isPopUp && (
                <div className="popup-container">
                    <div className="popup">
                        <WorkoutDay
                        ></WorkoutDay>
                        <button onClick={closePopUp}>Close</button>
                    </div>
                    <div className="background-overlay"></div>
                </div>
            )}
    </div>
  );
};

export default WorkoutPlanPage;