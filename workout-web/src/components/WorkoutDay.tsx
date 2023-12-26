import React, { FC, useState } from "react";
import { ExerciseComponent } from "./ExerciseComponent";
import { Exercise } from "../interfaces/exercise";

export const WorkoutDay = ({
  curDay,
  closePopUp,
}: {
  curDay: string;
  closePopUp: () => void;
}) => {
  const [isExerciseComponent, setIsExerciseComponent] = useState(false);

const [exerciseList, setExerciseList] = useState<Exercise[]>([]); 

  const addExercise = () => {
    setIsExerciseComponent(true);
  };

  const closeExercise = () => {
   setIsExerciseComponent(false);
 };

  return (
    <div>
      <h1>{curDay}</h1>
      <h2>Exercises for the day:</h2>
      <div>
        {exerciseList.map((exercise, index) => (
          <div key={index}>
            <h3> Exercise {index + 1}: {exercise.exerciseName}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Weight: {exercise.curWeight}</p>
            <p>Rest Time: {exercise.restTime}</p>
            <p>Notes: {exercise.notes}</p>
          </div>
        ))}
      </div>
      <button style={{ marginBottom: "10px" }} onClick={addExercise}>
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
        <button onClick={closePopUp}>Close</button>
      </div>
    </div>
  );
};
