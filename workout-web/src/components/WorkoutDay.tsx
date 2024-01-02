import React, { FC, useState } from "react";
import { ExerciseComponent } from "./ExerciseComponent";
import { Exercise } from "../interfaces/exercise";
import "./WorkoutDay.css";

export const WorkoutDay = ({
  curDay,
  updateExercises,
  closePopUp,
}: {
  curDay: string;
  updateExercises: (exercises: Exercise[]) => void;
  closePopUp: () => void;
}) => 
{
  const [isExerciseComponent, setIsExerciseComponent] = useState(false);

  const [exerciseList, setExerciseList] = useState<Exercise[]>([]); 

  const addExercise = () => {
    setIsExerciseComponent(true);
  };

  const closeExercise = () => {
    setIsExerciseComponent(false);
  };

  const closePopUpModified = () => {
    updateExercises(exerciseList);
    closePopUp();
  };

  return (
    <div className="workoutDay">
      <h1 className="dayHeading">{curDay}</h1>
      <h2 className="exercisesHeading">Exercises for the day:</h2>
      <div className="exerciseList">
        {exerciseList.map((exercise, index) => (
          <div key={index} className="exerciseItem">
            <h3> Exercise {index + 1}: {exercise.exerciseName}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Weight: {exercise.curWeight}</p>
            <p>Rest Time: {exercise.restTime}</p>
            <p>Notes: {exercise.notes}</p>
          </div>
        ))}
      </div>
      <button className="addButton" onClick={addExercise}>
        Add Exercise
      </button>
      <div>
        {isExerciseComponent && (
            <ExerciseComponent
              closeExercise={closeExercise}
              exerciseList={exerciseList}
              setExerciseList={setExerciseList}
            ></ExerciseComponent>
        )}
      </div>
      <div>
        <button onClick={closePopUpModified} className="closeButton">Close</button>
      </div>
    </div>
  );
};
