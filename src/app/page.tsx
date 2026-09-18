import { getTrendingMovies } from "@/utils/api";
import Searchbar from "@/components/Searchbar";
import TrendingSection from "@/components/TrendingSection"; // <-- Import komponen baru

export const metadata = {
  title: "The Movie DB - Explore Movies, TV Shows, and People",
  description: "Discover millions of movies, TV shows, and people with The Movie DB.",
};

export default async function HomePage() {
  // Ambil data awal (default: 'day' / today) di Server Component untuk performa SEO terbaik
  const initialMovies = await getTrendingMovies();

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-12">
      
      {/* ─── 1. HERO BANNER WELCOME & SEARCH (FULL WIDTH) ─── */}
      <section className="relative w-full bg-[#01b4e4] min-h-[300px] md:min-h-[360px] flex items-center px-6 md:px-12 py-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600" 
            alt="TMDB Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full max-w-[1300px] mx-auto relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Welcome.
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight mt-1 mb-8 opacity-90">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          
          <div className="w-full">
            <Searchbar />
          </div>
        </div>
      </section>

      {/* ─── 2. TRENDING SECTION DENGAN TOMBOL INTERAKTIF ─── */}
      <TrendingSection initialMovies={initialMovies} />

    </main>
  );
}
