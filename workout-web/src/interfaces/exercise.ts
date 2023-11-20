export interface Exercise {
    workoutName: string;
    targetMuscles: string; //another Interface later
    sets: number;
    reps: number;
    prevWeight: number;
    currWeight: number;
    restTime: number;
    video: string; //change datatype in the future
}