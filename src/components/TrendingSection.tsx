"use client";

import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

interface TrendingSectionProps {
  initialMovies: Movie[];
}

export default function TrendingSection({ initialMovies }: TrendingSectionProps) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Kalau 'day' saat pertama load, pakai data awal dari server
    if (timeWindow === "day" && movies === initialMovies) return;

    async function fetchTrending() {
      setLoading(true);
      try {
        // Tembak API Route internal kita sendiri!
        const res = await fetch(`/api/trending?time=${timeWindow}`);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, [timeWindow]);

  return (
    <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 mt-10">
      
      {/* Judul & Toggle Filter Trending */}
      <div className="flex items-center gap-5 mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">Trending</h3>
        
        <div className="inline-flex border border-[#032541] rounded-full p-0.5 overflow-hidden font-semibold text-sm">
          <button
            onClick={() => setTimeWindow("day")}
            className={`px-4 py-1 rounded-full transition-colors ${
              timeWindow === "day"
                ? "bg-[#032541] text-white"
                : "text-[#032541] hover:text-slate-700"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTimeWindow("week")}
            className={`px-4 py-1 rounded-full transition-colors ${
              timeWindow === "week"
                ? "bg-[#032541] text-white"
                : "text-[#032541] hover:text-slate-700"
            }`}
          >
            This Week
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-500 font-medium">Memuat film... 🎬</div>
      ) : (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      )}

    </div>
  );
}
