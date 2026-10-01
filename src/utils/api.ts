import { Workout } from "@/types/workout.type";

const API =
  process.env.FITLOG_API_URL ||
  "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(API, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data;
}

export async function getWorkout(
  id: string
): Promise<Workout | null> {
  const res = await fetch(`${API}/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data = await res.json();

  return data;
}