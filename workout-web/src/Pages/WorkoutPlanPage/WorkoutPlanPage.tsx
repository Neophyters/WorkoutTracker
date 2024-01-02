import React, { FC, useState } from 'react';
import './WorkoutPlanPage.css'; // Import your CSS file for styling
import { Button } from 'react-bootstrap';
import { WorkoutDay } from '../../components/WorkoutDay';
import { Exercise } from '../../interfaces/exercise';

interface WorkoutPlanPageProps {}

const WorkoutPlanPage: FC<WorkoutPlanPageProps> = () => {
  const [exercisesByDay, setExercisesByDay] = useState<{ [key: string]: Exercise[] }>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });
  const updateExercisesForDay = (day: string, exercises: Exercise[]) => {
    setExercisesByDay(prevExercisesByDay => ({
      ...prevExercisesByDay,
      [day]: exercises
    }));
  };
  
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
    <div className="workout-plan-container">
      <h1 className="workout-plan-heading">Weekly Workout Plan</h1>
      <div className="workout-plan-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-container">
            <h2 className="day-heading">{day}</h2>
            <Button className="edit-day-button" onClick={() => editDay(day)}>
              Edit Day
            </Button>
            {exercisesByDay[day].map((exercise, idx) => (
            <div key={idx} className="exercise-card">
              <h3 className='exercise-name'>{exercise.exerciseName}</h3>
              <p className="exercise-attribute">Sets: {exercise.sets}</p>
              <p className="exercise-attribute">Reps: {exercise.reps}</p>
              <p className="exercise-attribute">Weight: {exercise.curWeight}</p>
              <p className="exercise-attribute">Rest Time: {exercise.restTime}</p>
              <p className="exercise-notes">Notes: {exercise.notes}</p>
            </div>
            ))}
          </div>
        ))}
      </div>
      {isPopUp && (
        <div className="popup-container">
            <div className="popup">
                <WorkoutDay
                    curDay={curDay}
                    closePopUp={closePopUp}
                    updateExercises={(exercises: Exercise[]) => updateExercisesForDay(curDay, exercises)}
                ></WorkoutDay>
            </div>
            <div className="background-overlay"></div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanPage;