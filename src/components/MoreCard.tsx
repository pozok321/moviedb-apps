import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

interface MoreCardProps {
  movie: Movie;
}

export default function MoreCard({ movie }: MoreCardProps) {
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}w500${movie.poster_path}`;

  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={imageUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-yellow-400 font-bold text-xs">
            ⭐ {movie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-white text-lg truncate group-hover:text-blue-400 transition-colors">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
}