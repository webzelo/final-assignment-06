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

  setPlan: React.Dispatch<
    React.SetStateAction<Workout[]>
  >;

  setSaved: React.Dispatch<
    React.SetStateAction<Workout[]>
  >;

  hydrated: boolean;
}

export const WorkoutContext =
  createContext<ContextType>({
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

  const [plan, setPlan] =
    useState<Workout[]>([]);

  const [saved, setSaved] =
    useState<Workout[]>([]);

  const [hydrated, setHydrated] =
    useState(false);


  // Load data from localStorage
  useEffect(() => {

    try {

      const storedPlan =
        localStorage.getItem("plan");

      const storedSaved =
        localStorage.getItem("saved");


      if (storedPlan) {
        setPlan(
          JSON.parse(storedPlan)
        );
      }


      if (storedSaved) {
        setSaved(
          JSON.parse(storedSaved)
        );
      }

    } catch (error) {

      console.error(
        "Failed to load localStorage:",
        error
      );

    } finally {

      setHydrated(true);

    }

  }, []);


  // Save plan after hydration
  useEffect(() => {

    if (!hydrated) return;

    localStorage.setItem(
      "plan",
      JSON.stringify(plan)
    );

  }, [plan, hydrated]);


  // Save saved workouts after hydration
  useEffect(() => {

    if (!hydrated) return;

    localStorage.setItem(
      "saved",
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