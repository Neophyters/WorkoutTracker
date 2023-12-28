export interface Exercise {
    exerciseName: string;
    // targetMuscles: string; //another Interface later
    sets: number;
    reps: number;
    // prevWeight: number;
    curWeight: number;
    restTime: string;
    notes: string;
    // video: string; //change datatype in the future
}