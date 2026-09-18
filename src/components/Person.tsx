import { Person as PersonType } from "@/types/movie";
import Link from "next/link";

interface PersonCardProps {
  person: PersonType;
}

export default function PersonCard({ person }: PersonCardProps) {
  const profileUrl = person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : "/img/no-avatar.jpg";

  // Ambil intisari daftar karya terkenal (gabungan judul film atau tv show)
  const famousWorks = person.known_for
    ?.map((item) => ("title" in item ? item.title : item.name))
    .filter(Boolean)
    .join(", ");

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full group">
      {/* Foto Profil */}
      <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
        <img 
          src={profileUrl} 
          alt={person.name} 
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 object-top"
        />
      </div>

      {/* Informasi Detail Orang */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white">
        <div>
          <Link href={`/person/${person.id}`} className="font-bold text-slate-900 group-hover:text-[#01b4e4] transition-colors line-clamp-1 text-base leading-tight">
            {person.name}
          </Link>
          <span className="text-xs text-slate-400 font-semibold block mt-0.5">
            {person.known_for_department}
          </span>
        </div>

        {/* Daftar Karya Singkat Terkenal */}
        {famousWorks && (
          <p className="text-xs text-slate-500 mt-2 line-clamp-2 italic leading-relaxed pt-2 border-t border-slate-100">
            {famousWorks}
          </p>
        )}
      </div>
    </div>
  );
}