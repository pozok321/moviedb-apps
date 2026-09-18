import { TVShow as TVShowType } from "@/types/movie";
import Link from "next/link";

interface TvshowCardProps {
  show: TVShowType;
}

export default function TvshowCard({ show }: TvshowCardProps) {
  const posterUrl = show.poster_path ? `https://image.tmdb.org/t/p/w500${show.poster_path}` : "/img/no-poster.jpg";
  const formattedDate = show.first_air_date 
    ? new Date(show.first_air_date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) 
    : "Unknown Air Date";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group h-full">
      {/* Area Poster */}
      <div className="relative aspect-[2/3] w-full bg-slate-100 overflow-hidden">
        <img 
          src={posterUrl} 
          alt={show.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge Rating Bundar di Pojok Kiri */}
        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-slate-950 border-2 border-green-400 flex items-center justify-center text-white font-bold text-xs shadow-md z-10">
          {Math.round(show.vote_average * 10)}
        </div>
      </div>

      {/* Konten Teks Pendek */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <Link href={`/tv/${show.id}`} className="font-bold text-slate-900 group-hover:text-[#01b4e4] transition-colors leading-snug line-clamp-2 text-base">
            {show.name}
          </Link>
          <span className="text-xs text-slate-400 font-medium block mt-1">{formattedDate}</span>
        </div>
        
        {show.origin_country && show.origin_country.length > 0 && (
          <div className="mt-3 flex gap-1 flex-wrap">
            {show.origin_country.map((country) => (
              <span key={country} className="text-[10px] uppercase font-extrabold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                {country}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}