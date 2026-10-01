import { notFound } from "next/navigation";
import Image from "next/image";
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
<section className="bg-[#080a09] text-white px-5 py-10">

  <div className="max-w-5xl mx-auto">

    <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">

      {/* IMAGE */}
      <div className="relative h-[610px] rounded-xl overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>


      {/* DETAILS */}
      <div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          {workout.name}
        </h1>


        <p className="text-white/70 mt-4 leading-6 max-w-xl">
          {workout.description}
        </p>


        {/* TAGS */}
        <div className="flex gap-2 mt-5">

          <span className="
            bg-[#ccff00]
            text-black
            px-4 py-1
            rounded-full
            text-sm
            font-bold
          ">
            {workout.category}
          </span>

          <span className="
            bg-[#ccff00]
            text-black
            px-4 py-1
            rounded-full
            text-sm
            font-bold
          ">
            Arms
          </span>

        </div>


        {/* INFO TABLE */}
        <div className="
          mt-8
          rounded-xl
          overflow-hidden
          border
          border-white/10
          bg-[#161b18]
        ">


          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.calories} kcal`],
            ["Rating", workout.rating],
          ].map(([label,value]) => (

            <div
              key={label}
              className="
                grid grid-cols-2
                px-4 py-4
                border-b
                border-white/10
                last:border-none
              "
            >

              <span className="
                text-xs
                uppercase
                font-bold
                text-white/50
              ">
                {label}
              </span>


              <span className="font-semibold">
                {value}
              </span>

            </div>

          ))}


        </div>



        {/* INSTRUCTIONS */}
        <div className="mt-8">

          <h2 className="
            text-xl
            font-black
            uppercase
            mb-5
          ">
            Instructions
          </h2>


          <ol className="space-y-3">

            {workout.instructions?.map(
              (instruction,index)=>(
                
              <li
                key={index}
                className="
                  flex
                  gap-3
                  text-white/80
                  text-sm
                  leading-6
                "
              >

                <span className="font-bold">
                  {index+1}.
                </span>

                {instruction}

              </li>

            ))}

          </ol>


        </div>


        {/* BUTTONS */}
        <ActionButtons workout={workout}/>


      </div>


    </div>


  </div>

</section>
);
}