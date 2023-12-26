import React, { FC, useState } from 'react';
import './WorkoutPlanPage.css'; // Import your CSS file for styling
import { Button } from 'react-bootstrap';
import { WorkoutDay } from '../../components/WorkoutDay';

interface WorkoutPlanPageProps {}

const WorkoutPlanPage: FC<WorkoutPlanPageProps> = () => {
  // Array of day names
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [isPopUp, setIsPopUp] = useState(false);
  const [curDay, setCurDay] = useState('');

  // Function to edit the day
  //pass in a string value of the day
  const editDay = (currentDay: string) => {
    setIsPopUp(true);
    setCurDay(currentDay);
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
            <Button onClick={() => editDay(day)}>Edit Day</Button>
          </div>
        ))}
      </div>
      {isPopUp && (
                <div className="popup-container">
                    <div className="popup">
                        <WorkoutDay
                            curDay={curDay}
                            closePopUp={closePopUp}
                        ></WorkoutDay>
                    </div>
                    <div className="background-overlay"></div>
                </div>
            )}
    </div>
  );
};

export default WorkoutPlanPage;