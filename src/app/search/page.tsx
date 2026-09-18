"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="w-full flex items-center bg-white rounded-full shadow-lg p-1 border border-slate-200"
    >
      {/* Kolom Input Teks */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie, tv show, person......"
        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none py-3 pl-6 pr-4 text-base md:text-lg"
      />
      
      {/* Tombol Search Gradient Bulat Lembut ala TMDB */}
      <button 
        type="submit"
        className="flex-shrink-0 bg-gradient-to-r from-[#1de4bc] to-[#01b4e4] hover:opacity-90 active:scale-95 transition-all text-white font-bold text-base px-8 py-3 rounded-full shadow-md"
      >
        Search
      </button>
    </form>
  );
}