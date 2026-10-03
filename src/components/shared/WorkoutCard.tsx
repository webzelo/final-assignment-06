import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Workout } from "@/types/workout.type";

import Image from "next/image";

interface Props {
  workout: Workout;
}

export default function WorkoutCard({ workout }: Props) {
  return (
    <article className="bg-[#111513] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#ccff00]/50 transition">

      {/* Image */}
      <div className="h-56 overflow-hidden">

        <Image
  src={workout.image}
  alt={workout.name}
  width={500}
  height={300}
  className="w-full h-52 object-cover rounded-xl"
/>

      </div>

      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-[#ccff00] text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
          {workout.category}
        </span>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mt-4">
          {workout.name}
        </h3>

        <p className="text-sm text-white/50 mt-2">
          {workout.equipment}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/10 mt-5 pt-4">

          <div>
            <p className="text-xs text-white/40">Duration</p>
            <p className="font-bold">{workout.duration} min</p>
          </div>

          <div>
            <p className="text-xs text-white/40">Calories</p>
            <p className="font-bold">{workout.caloriesBurned}</p>
          </div>

          <div>
            <p className="text-xs text-white/40">Rating</p>
            <p className="font-bold">★ {workout.rating}</p>
          </div>

        </div>

        <Link
          href={`/workout/${workout.id}`}
          className="flex items-center justify-between mt-5 border border-white/20 rounded-lg px-4 py-3 font-bold hover:bg-[#ccff00] hover:text-black transition"
        >
          View Details

          <ArrowUpRight size={18} />
        </Link>

      </div>

    </article>
  );
}