import { getTrendingTVShows } from "@/utils/api";
import TvshowCard from "@/components/TvShow"; // Menggunakan komponen Tvshow yang dibuat sebelumnya

export default async function TVShowsPage() {
  const tvShows = await getTrendingTVShows();

  return (
    <main className="min-h-screen bg-white text-slate-900 py-10 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">Popular TV Shows</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {tvShows.map((show) => (
            <TvshowCard key={show.id} show={show} />
          ))}
        </section>
      </div>
    </main>
  );
}