"use client";

import { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import { WorkoutContext } from "@/context/WorkoutContext";
import PlanCard from "@/components/plan/PlanCard";

type SortOption =
  | "default"
  | "name"
  | "duration-low"
  | "duration-high"
  | "calories-low"
  | "calories-high"
  | "rating-high";

export default function MyPlan() {
  const {
    plan,
    setPlan,
    saved,
    setSaved,
    hydrated,
  } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] =
    useState<SortOption>("default");

  // Safely convert values to numbers
  const getNumber = (value: unknown) => {
    const number = Number(value);

    return Number.isFinite(number) ? number : 0;
  };

  // Total minutes
  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + getNumber(workout.duration),
    0
  );

  // Total calories
  const totalCalories = plan.reduce(
    (total, workout) =>
      total + getNumber(workout.caloriesBurned),
    0
  );

  function removeFromPlan(id: number) {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );

    toast.info("Workout removed from plan");
  }

  function removeFromSaved(id: number) {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );

    toast.info("Workout removed from saved");
  }

  function markComplete(id: number) {
    setPlan((current) =>
      current.map((workout) =>
        workout.id === id
          ? { ...workout, completed: true }
          : workout
      )
    );

    toast.success("Workout marked as done");
  }

  const currentList =
    activeTab === "plan" ? plan : saved;

  // Sorting
  const sortedList = useMemo(() => {
    const list = [...currentList];

    switch (sortBy) {
      case "name":
        return list.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      case "duration-low":
        return list.sort(
          (a, b) =>
            getNumber(a.duration) -
            getNumber(b.duration)
        );

      case "duration-high":
        return list.sort(
          (a, b) =>
            getNumber(b.duration) -
            getNumber(a.duration)
        );

      case "calories-low":
        return list.sort(
          (a, b) =>
            getNumber(a.caloriesBurned) -
            getNumber(b.caloriesBurned)
        );

      case "calories-high":
        return list.sort(
          (a, b) =>
            getNumber(b.caloriesBurned) -
            getNumber(a.caloriesBurned)
        );

      case "rating-high":
        return list.sort(
          (a, b) =>
            getNumber(b.rating) -
            getNumber(a.rating)
        );

      default:
        return list;
    }
  }, [currentList, sortBy]);

  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white">
        Loading workouts…
      </div>
    );
  }

  return (
    <section className="bg-[#080a09] text-white px-5 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-[#ccff00] font-bold tracking-[0.2em] text-sm">
          YOUR TRAINING
        </p>

        <h1 className="text-5xl font-black uppercase mt-2">
          My Plan
        </h1>

        <p className="text-white/50 mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">

          {/* Exercises */}
          <div className="bg-[#111513] border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Exercises
            </p>

            <h2 className="text-4xl font-black mt-2">
              {plan.length}
            </h2>
          </div>

          {/* Minutes */}
          <div className="bg-[#111513] border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Minutes
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalMinutes}
            </h2>
          </div>

          {/* Calories */}
          <div className="bg-[#111513] border border-white/10 rounded-2xl p-6">
            <p className="text-white/50">
              Calories
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs + Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 border-b border-white/10 pb-4">

          {/* Tabs */}
          <div className="flex gap-3">

            <button
              onClick={() =>
                setActiveTab("plan")
              }
              className={`px-5 py-3 rounded-full font-bold transition ${
                activeTab === "plan"
                  ? "bg-[#ccff00] text-black"
                  : "border border-white/20 hover:border-white/40"
              }`}
            >
              Today's Plan ({plan.length})
            </button>

            <button
              onClick={() =>
                setActiveTab("saved")
              }
              className={`px-5 py-3 rounded-full font-bold transition ${
                activeTab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "border border-white/20 hover:border-white/40"
              }`}
            >
              Saved ({saved.length})
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-sm text-white/50">
              Sort by
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as SortOption
                )
              }
              className="
                bg-[#111513]
                border
                border-white/20
                text-white
                px-4
                py-3
                rounded-xl
                text-sm
                font-semibold
                outline-none
                cursor-pointer
                focus:border-[#ccff00]
              "
            >
              <option value="default">
                Default
              </option>

              <option value="name">
                Name A-Z
              </option>

              <option value="duration-low">
                Duration: Low to High
              </option>

              <option value="duration-high">
                Duration: High to Low
              </option>

              <option value="calories-low">
                Calories: Low to High
              </option>

              <option value="calories-high">
                Calories: High to Low
              </option>

              <option value="rating-high">
                Rating: High to Low
              </option>
            </select>

          </div>

        </div>

        {/* Empty State */}
        {sortedList.length === 0 ? (

          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl mt-8">

            <p className="text-[#ccff00] text-sm font-bold tracking-[0.2em]">
              NOTHING HERE YET
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Your list is empty.
            </h2>

            <p className="text-white/50 mt-3">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="inline-block mt-6 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"
            >
              Go to workouts
            </Link>

          </div>

        ) : (

          /* Workout Cards */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

            {sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                mode={activeTab}
                onRemove={
                  activeTab === "plan"
                    ? removeFromPlan
                    : removeFromSaved
                }
                onComplete={markComplete}
              />
            ))}

          </div>

        )}

      </div>
    </section>
  );
}