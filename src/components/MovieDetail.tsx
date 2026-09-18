import { MovieDetail as MovieDetailType } from "@/types/movie";

interface MovieDetailProps {
  movie: MovieDetailType;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const detailMovie = movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}` : "/img/no-avatar.jpg";
  // Helper untuk format mata uang (Budget & Revenue)
  const formatCurrency = (num: number) => {
    if (num === 0) return "-";
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(num);
  };

  // Helper untuk format durasi menit ke Jam & Menit
  const formatRuntime = (minutes: number | null) => {
    if (!minutes) return "-";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/img/no-poster.jpg";
  const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : "";

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen">
      {/* SECTION BANNER DETAIL (Warna Gelap Terpusat) */}
      <section className="relative w-full bg-slate-900 text-white py-12 px-6 md:px-12 overflow-hidden flex items-center">
        {backdropUrl && (
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src={backdropUrl} alt="Backdrop" className="w-full h-full object-cover blur-sm" />
          </div>
        )}
           <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
        <img 
          src={detailMovie} 
          alt={movie.title} 
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 object-top"
        />
      </div>

        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Kiri: Poster */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 flex justify-center">
            <img src={posterUrl} alt={movie.title} className="w-full max-w-[300px] rounded-2xl shadow-2xl border border-slate-700 object-cover" />
          </div>

          {/* Kanan: Info Teks */}
          <div className="col-span-1 md:col-span-8 lg:col-span-9 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {movie.title} <span className="font-normal text-slate-400">({movie.release_date?.split("-")[0]})</span>
            </h1>

            {/* Fakta Singkat (Tanggal, Genre, Durasi) */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-2 font-medium">
              <span>{movie.release_date}</span>
              <span>•</span>
              <span>{movie.genres.map((g) => g.name).join(", ")}</span>
              <span>•</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-white text-xs">{formatRuntime(movie.runtime)}</span>
            </div>

            {/* Skor Rating Ringkas */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-teal-400 flex items-center justify-center font-bold text-teal-400 text-sm shadow-md">
                {Math.round(movie.vote_average * 10)}%
              </div>
              <span className="font-bold text-sm tracking-wide">User Score</span>
            </div>

            {/* Tagline & Deskripsi Singkat */}
            {movie.tagline && <p className="italic text-slate-400 text-base mt-6">"{movie.tagline}"</p>}
            
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Overview</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl">{movie.overview || "No overview available."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFORMASI TAMBAHAN FINANCE / PRODUKSI (Bawah) */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-6">
          <h4 className="text-xl font-bold border-b border-slate-200 pb-2">Production Companies</h4>
          <div className="flex flex-wrap gap-6 items-center">
            {movie.production_companies.map((company) => (
              <div key={company.id} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3 shadow-sm">
                {company.logo_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt={company.name} className="h-6 object-contain max-w-[100px]" />
                ) : (
                  <span className="text-xs font-bold text-slate-500 uppercase">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Kanan Kecil */}
        <div className="space-y-4 text-sm bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm h-fit">
          <div>
            <span className="block font-bold text-slate-500 text-xs uppercase tracking-wider">Status</span>
            <span className="text-base font-semibold text-slate-800">{movie.status}</span>
          </div>
          <div>
            <span className="block font-bold text-slate-500 text-xs uppercase tracking-wider">Budget</span>
            <span className="text-base font-semibold text-slate-800">{formatCurrency(movie.budget)}</span>
          </div>
          <div>
            <span className="block font-bold text-slate-500 text-xs uppercase tracking-wider">Revenue</span>
            <span className="text-base font-semibold text-slate-800">{formatCurrency(movie.revenue)}</span>
          </div>
        </div>
      </section>
    </div>
  );
}