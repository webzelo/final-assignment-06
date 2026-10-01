import { getWorkouts } from "@/utils/api";
import WorkoutFilter from "./WorkoutFilter";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="bg-[#080a09] text-white px-5 py-20 scroll-mt-20"
    >

      <div className="max-w-7xl mx-auto">

        <p className="text-[#ccff00] text-sm font-bold tracking-[0.2em]">
          WORKOUT LIBRARY
        </p>

        <h2 className="text-5xl font-black uppercase mt-2">
          The Library
        </h2>

        <p className="text-white/50 mt-3 mb-10">
          Twelve lifts covering every major muscle group.
        </p>

        <WorkoutFilter workouts={workouts} />

      </div>

    </section>
  );
}