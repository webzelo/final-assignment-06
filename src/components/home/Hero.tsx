import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0b0d12] text-white py-8">

      <div className="max-w-6xl mx-auto px-5">

        <div className="rounded-2xl border border-white/10 bg-[#171a22] overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center px-10 py-12">

            {/* Left content */}
            <div>

              <p className="text-[#ccff00] text-xs font-bold tracking-[0.25em] mb-6">
                WORKOUT LIBRARY
              </p>

              <h1 className="text-4xl md:text-6xl font-black uppercase leading-[1.05]">
                Train With Intent.
                <br />
                <span className="text-[#ccff00]">
                  Log Every Set.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-white/60 text-base leading-7">
                FitLog is a dark, no-nonsense gym companion:
                pick a lift, lock it into today's plan,
                and watch the week's work add up.
              </p>

              <Link
                href="/#library"
                className="inline-flex items-center gap-3 mt-7 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold text-sm"
              >
                Browse Workouts
                <ArrowDownRight size={18}/>
              </Link>

            </div>


            {/* Right image */}
            <div className="relative h-[350px] lg:h-[450px]">

              <Image
                src="/banner.png"
                alt="Athlete training in a gym"
                fill
                className="object-contain"
                priority
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}