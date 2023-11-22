import React, { useState } from 'react';
import WorkoutPlan from './components/WorkoutPlan/WorkoutPlan';
import { Button } from "react-bootstrap";

function App() {
  const [isWorkoutPlan, setIsWorkoutPlan] = useState<boolean>(false);
  return (
    <div className="App">
      Welcome to the Workout Planner!
      <Button></Button>
      <WorkoutPlan></WorkoutPlan>
    </div>
  );
}

export default App;
