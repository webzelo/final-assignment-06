"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useContext(WorkoutContext);

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  const planActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 bg-[#080a09]/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-black"
        >
          <Dumbbell className="text-[#ccff00]" />

          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/#library"
            className={
              workoutActive
                ? "text-[#ccff00] font-semibold"
                : "text-white/60 hover:text-white"
            }
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={
              planActive
                ? "text-[#ccff00] font-semibold"
                : "text-white/60 hover:text-white"
            }
          >
            My Plan
          </Link>

        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">

          <Link
            href="/my-plan"
            className="bg-[#ccff00] text-black px-4 py-2 rounded-full text-xs sm:text-sm font-bold"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="border border-white/30 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold"
          >
            Saved {saved.length}
          </Link>

        </div>

      </nav>
    </header>
  );
}