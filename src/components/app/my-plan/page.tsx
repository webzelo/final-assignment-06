"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { Workout } from "@/types/workout.type";

interface Props {
  workout: Workout;
  mode: "plan" | "saved";
  onRemove: (id: number) => void;
  onComplete?: (id: number) => void;
}

export default function PlanCard({
  workout,
  mode,
  onRemove,
  onComplete,
}: Props) {
  return (
    <article className="bg-[#111513] border border-white/10 rounded-2xl p-4">

      <Image
        src={workout.image}
        alt={workout.name}
        width={500}
        height={300}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h3 className="text-xl font-bold mt-4">
        {workout.name}
      </h3>

      <p className="text-white/50 text-sm mt-1">
        {workout.equipment}
      </p>

      <div className="flex flex-wrap gap-4 text-sm mt-4 text-white/70">
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
        <span>★ {workout.rating}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-5">

        <Link
          href={`/workout/${workout.id}`}
          className="border border-white/20 px-3 py-2 rounded-lg text-sm font-semibold"
        >
          View Details
        </Link>

        {mode === "plan" && (
          <button
            onClick={() => onComplete?.(workout.id)}
            disabled={workout.completed}
            className="flex items-center gap-1 bg-[#ccff00] text-black px-3 py-2 rounded-lg text-sm font-bold disabled:bg-gray-500 disabled:text-white"
          >
            <Check size={16} />

            {workout.completed ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          aria-label="Remove workout"
          className="border border-white/20 p-2 rounded-lg hover:bg-red-500 transition"
        >
          <X size={18} />
        </button>

      </div>

    </article>
  );
}