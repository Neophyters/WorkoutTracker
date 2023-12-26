import React, { FC } from "react";
import ExerciseComponent from "./ExerciseComponent";

//add the interface for the props
//the prop I want is from WorkoutPlanPage.tsx which is the day of the week
//I want to pass in the day of the week to this component
//the day of the week is the string variable called curDay
export const WorkoutDay = ({
  curDay,
  closePopUp,
}: {
  curDay: string;
  closePopUp: () => void;
}) => {
  //function to save the day
  const saveDay = () => {
    console.log("save day");
  };
  return (
    <div>
      <h1>{curDay}</h1>
      <h2>Add Exercise:</h2>
      <button onClick={saveDay}>Save</button>
      <button onClick={closePopUp}>Close</button>
    </div>
  );
};
