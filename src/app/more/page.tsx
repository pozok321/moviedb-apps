import { getMoreData }  from "@/utils/api";
import MoreCard from "@/components/MoreCard";

export default async function MorePages() {
  const morePages = await getMoreData(); // Memanggil fungsi API

  return (
    <main className="min-h-screen bg-white text-slate-900 py-10 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">More Data</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
         {morePages.map((movie) => (
            <MoreCard key={movie.id} movie={movie} /> 
          ))}
        </section>
      </div>
    </main>
  );
}