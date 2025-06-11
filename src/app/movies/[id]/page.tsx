import { getMovieById, getMovies } from "@/app/(lib)/api";
import { Movie } from "@/app/(lib)/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export async function generateMetadata({ params }: MovieDetailPageProps) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    return { title: "Movie Not Found" };
  }
  return {
    title: movie.title,
    description: movie.description.substring(0, 150) + "...",
  };
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const movie: Movie | null = await getMovieById(params.id);
  if (!movie) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to all movies
      </Link>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex md:space-x-8 p-6 md:p-8">
        <div className="md:w-1/3 flex-shrink-0">
          <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden shadow-md">
            <Image
              src={movie.posterUrl || "/placeholder-image.png"}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            {movie.title}
          </h1>
          <p className="text-lg text-slate-500 mb-4">
            Directed by{" "}
            <span className="font-semibold text-slate-700">
              {movie.director}
            </span>
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-slate-600">
              Year: <span className="font-semibold">{movie.year}</span>
            </span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
              Rating: {movie.rating}
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-700 mt-6 mb-2 border-b pb-2">
            Description
          </h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
            {movie.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
