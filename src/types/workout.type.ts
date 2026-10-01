export interface Workout {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  equipment: string;
  difficulty: string;
  duration: number;
  calories: number;
  rating: number;
  sets: number;
  reps: string | number;
  instructions: string[];
  completed?: boolean;
}