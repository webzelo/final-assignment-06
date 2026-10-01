"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] bg-[#080a09] text-white flex items-center justify-center px-5">

      <div className="text-center">

        <h2 className="text-3xl font-bold">
          Something went wrong.
        </h2>

        <p className="text-white/50 mt-3">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}