export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-[#080a09] text-white flex items-center justify-center">

      <div className="text-center">

        <div className="w-12 h-12 border-4 border-white/10 border-t-[#ccff00] rounded-full animate-spin mx-auto" />

        <p className="mt-5 font-bold">
          Loading FitLog...
        </p>

      </div>

    </div>
  );
}