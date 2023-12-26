import React, { FC, useState } from "react";

export const ExerciseComponent = ({
  closeExercise,
}: {
  closeExercise: () => void;
}) => {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [restTime, setRestTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    closeExercise();
  };

  return (
    <div
      style={{
        border: "5px solid white",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exerciseName">Exercise Name:</label>
          <input
            type="text"
            id="exerciseName"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sets">Sets:</label>
          <input
            type="number"
            id="sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="reps">Reps:</label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="restTime">Rest Time:</label>
          <input
            type="text"
            id="restTime"
            value={restTime}
            onChange={(e) => setRestTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <input
            type="text"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <button style={{ marginRight: "6px" }} onClick={handleSubmit}>
            Save
          </button>
          <button onClick={closeExercise}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
