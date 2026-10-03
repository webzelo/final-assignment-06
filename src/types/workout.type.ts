export interface Workout {
  id: number;
  name: string;
  image: string;
  description: string;

  muscleGroups: string[];

  equipment: string;
  difficulty: string;
  duration: number;

  caloriesBurned: number;

  rating: number;
  sets: number;
  reps: string | number;
  instructions: string[];

  completed?: boolean;
}