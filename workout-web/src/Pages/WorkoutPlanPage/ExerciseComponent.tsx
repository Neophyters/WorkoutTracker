import React, { FC, useState } from "react";
import { Exercise } from "../../interfaces/exercise";
import "./ExerciseComponent.css";

export const ExerciseComponent = ({
  closeExercise,
  exerciseList,
  setExerciseList,
}: {
  closeExercise: () => void;
  exerciseList: Exercise[];
  setExerciseList: React.Dispatch<React.SetStateAction<Exercise[]>>;
}) => {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [restTimeValue, setRestTimeValue] = useState("");
  const [restTimeUnit, setRestTimeUnit] = useState("seconds");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    const restTime = `${restTimeValue} ${restTimeUnit}`;
    const newExercise: Exercise = {
      exerciseName: exerciseName,
      sets: parseInt(sets),
      reps: parseInt(reps),
      curWeight: parseInt(weight),
      restTime,
      notes,
    };
    setExerciseList([...exerciseList, newExercise]);

    closeExercise();
  };

  return (
    <div
      className="exercise-form-container"
    >
      <form onSubmit={handleSubmit} className="exercise-form">
        
          <div className="form-field">
            <label htmlFor="exerciseName">Exercise Name:</label>
            <input
              type="text"
              id="exerciseName"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="sets">Sets:</label>
            <input
              type="number"
              id="sets"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="reps">Reps:</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="restTimeValue">Rest Time:</label>
            <input
              type="number"
              id="restTimeValue"
              value={restTimeValue}
              onChange={(e) => setRestTimeValue(e.target.value)}
            />
            <select 
              id="restTimeUnit"
              value={restTimeUnit}
              onChange={(e) => setRestTimeUnit(e.target.value)}
              >
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="sets">Sets</option>
              </select>
          </div>
          <div className="form-field">
            <label htmlFor="notes">Notes:</label>
            <input
              type="text"
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        <div className="form-buttons">
          <button type="submit" className="save-button">Save</button>
          <button type="button" className="cancel-button" onClick={closeExercise}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
