"use client";

import { useMemo, useState } from "react";

import WorkoutCard from "../shared/WorkoutCard";
import { Workout } from "@/types/workout.type";

interface Props {
  workouts: Workout[];
}

export default function WorkoutFilter({ workouts }: Props) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const copy = [...workouts];

    if (sortBy === "duration") {
      copy.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      copy.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      copy.sort((a, b) => b.rating - a.rating);
    }

    return copy;
  }, [workouts, sortBy]);

  return (
    <>
      <div className="flex justify-end mb-8">

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#111513] border border-white/10 text-white rounded-lg px-4 py-3 outline-none"
        >
          <option value="duration">Sort: Duration</option>
          <option value="calories">Sort: Calories</option>
          <option value="rating">Sort: Rating</option>
        </select>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}

      </div>
    </>
  );
}