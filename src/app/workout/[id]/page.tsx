import { notFound } from "next/navigation";

import { getWorkout } from "@/utils/api";
import ActionButtons from "@/components/details/ActionButtons";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout || !workout.id) {
    notFound();
  }

  return (
    <section className="bg-[#080a09] text-white px-5 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-[350px] md:h-[550px] object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <span className="inline-block bg-[#ccff00] text-black px-3 py-1 rounded-full text-sm font-bold uppercase">
              {workout.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-black mt-5">
              {workout.name}
            </h1>

            <p className="text-white/60 leading-7 mt-5">
              {workout.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Equipment</p>
                <p className="font-bold mt-1">{workout.equipment}</p>
              </div>

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Difficulty</p>
                <p className="font-bold mt-1">{workout.difficulty}</p>
              </div>

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Sets</p>
                <p className="font-bold mt-1">{workout.sets}</p>
              </div>

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Reps</p>
                <p className="font-bold mt-1">{workout.reps}</p>
              </div>

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Duration</p>
                <p className="font-bold mt-1">{workout.duration} min</p>
              </div>

              <div className="bg-[#111513] p-4 rounded-xl">
                <p className="text-white/40 text-sm">Calories</p>
                <p className="font-bold mt-1">{workout.calories} kcal</p>
              </div>

            </div>

            <p className="mt-5 font-bold">
              ★ {workout.rating} Rating
            </p>

            <ActionButtons workout={workout} />

          </div>

        </div>

        {/* Instructions */}
        <div className="mt-16 max-w-4xl">

          <p className="text-[#ccff00] text-sm font-bold tracking-[0.2em]">
            EXECUTION GUIDE
          </p>

          <h2 className="text-3xl font-black uppercase mt-2 mb-8">
            How to do it
          </h2>

          <ol className="space-y-5">

            {workout.instructions?.map((instruction, index) => (
              <li key={index} className="flex gap-4 items-start">

                <span className="w-9 h-9 shrink-0 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold">
                  {index + 1}
                </span>

                <p className="text-white/70 leading-7">
                  {instruction}
                </p>

              </li>
            ))}

          </ol>

        </div>

      </div>

    </section>
  );
}