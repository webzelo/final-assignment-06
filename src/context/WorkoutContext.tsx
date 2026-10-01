"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { Workout } from "@/types/workout.type";

interface ContextType {
  plan: Workout[];
  saved: Workout[];

  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;

  hydrated: boolean;
}

export const WorkoutContext = createContext<ContextType>({
  plan: [],
  saved: [],
  setPlan: () => {},
  setSaved: () => {},
  hydrated: false,
});

export default function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Read localStorage once on the client
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to read saved workouts", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Do not save until initial hydration is complete
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        setPlan,
        setSaved,
        hydrated,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}