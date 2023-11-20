import React, { FC } from 'react';
import ExerciseComponent from './ExerciseComponent';

interface WorkoutDayProps {}

const WorkoutDay: FC<WorkoutDayProps> = () => {
    
   return (
   <div>YOOO Workout DAY!!!
    <ExerciseComponent></ExerciseComponent>
   </div>
   );
};

export default WorkoutDay;