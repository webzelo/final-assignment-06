export default function Loading() {
  return (
    <div className="bg-[#080a09] min-h-screen px-5 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="h-10 w-64 bg-[#161b18] animate-pulse rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="h-80 bg-[#161b18] animate-pulse rounded-2xl"
            />
          ))}

        </div>

      </div>

    </div>
  );
}