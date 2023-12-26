import React, { FC, useState } from "react";
import { ExerciseComponent } from "./ExerciseComponent";

export const WorkoutDay = ({
  curDay,
  closePopUp,
}: {
  curDay: string;
  closePopUp: () => void;
}) => {
  const [isExerciseComponent, setIsExerciseComponent] = useState(false);

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
      <button style={{ marginBottom: "10px" }} onClick={addExercise}>
        Add Exercise
      </button>
      <div>
         {isExerciseComponent && (
            <ExerciseComponent
               closeExercise={closeExercise}
            ></ExerciseComponent>
         )}
      </div>
      <div>
        <button onClick={closePopUp}>Close</button>
      </div>
    </div>
  );
};
