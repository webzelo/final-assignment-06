export default function Loading() {
  return (
    <div className="bg-[#080a09] min-h-screen px-5 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="h-[450px] bg-[#161b18] animate-pulse rounded-2xl" />

        <div className="space-y-5">

          <div className="h-10 bg-[#161b18] animate-pulse rounded" />

          <div className="h-32 bg-[#161b18] animate-pulse rounded" />

          <div className="h-12 bg-[#161b18] animate-pulse rounded" />

        </div>

      </div>

    </div>
  );
}