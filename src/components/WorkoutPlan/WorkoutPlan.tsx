import React, { FC } from 'react';
import WorkoutDay from '../WorkoutDay';

interface WorkoutPlanProps {}

const WorkoutPlan: FC<WorkoutPlanProps> = () => {
   return (
   <div>Hello this is the Workout Plan
      <WorkoutDay></WorkoutDay>
   </div>
   );
};

export default WorkoutPlan;
