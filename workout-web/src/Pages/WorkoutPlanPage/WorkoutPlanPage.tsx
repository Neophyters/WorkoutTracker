import React, { FC } from 'react';
import WorkoutDay from '../../components/WorkoutDay';

interface WorkoutPlanPageProps {}

const WorkoutPlanPage: FC<WorkoutPlanPageProps> = () => {
   return (
   <div>
        <h1>Workout Plan</h1>
        <WorkoutDay></WorkoutDay>
   </div>
   );
};

export default WorkoutPlanPage;
