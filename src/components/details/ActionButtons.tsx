"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout.type";


export default function ActionButtons({
  workout
}:{
  workout: Workout;
}) {


const {
  plan,
  saved,
  setPlan,
  setSaved
}=useContext(WorkoutContext);



function addToPlan(){

const exists =
plan.some(item=>item.id===workout.id);


if(!exists){
  setPlan([
    ...plan,
    workout
  ]);
}

}



function saveWorkout(){

const exists =
saved.some(item=>item.id===workout.id);


if(!exists){
 setSaved([
  ...saved,
  workout
 ]);
}

}


return (

<div className="flex gap-3 mt-6">


<button
onClick={addToPlan}
className="
bg-[#ccff00]
text-black
font-bold
px-6
py-3
rounded-full
"
>
Add to today's plan
</button>



<button
onClick={saveWorkout}
className="
border
border-white/30
text-white
font-bold
px-6
py-3
rounded-full
"
>
Save for later
</button>


</div>

);

}