import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#151924] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-white text-3xl tracking-tight"
        >
          <Dumbbell className="w-7 h-7 text-[#ccff00]" strokeWidth={2.5} />
          <span>FITLOG</span>
        </Link>

        {/* Right Text */}
        <p className="text-white/80 text-lg text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}