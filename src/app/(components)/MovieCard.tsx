import Link from "next/link";
import Image from "next/image";
import { Movie } from "../(lib)/types";

interface MovieCardProps {
  movie: Movie;
    priority?: boolean;
}

export default function MovieCard({ movie,priority=false }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={movie.posterUrl || "/placeholder-image.png"}
          alt={movie.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={priority}
        />
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-slate-800 mb-1 truncate"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-sm text-slate-600 mb-0.5">
          Director: {movie.director}
        </p>
        <p className="text-sm text-slate-600 mb-1">Year: {movie.year}</p>
        <p className="text-sm font-semibold text-amber-500">
          Rating: {movie.rating}
        </p>
      </div>
    </Link>
  );
}
