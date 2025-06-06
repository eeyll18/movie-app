import { getMovies } from './(lib)/api';
import { Movie } from './(lib)/types';
import MovieCard from './(components)/MovieCard';

export default async function HomePage() {
  const movies: Movie[] = await getMovies();

  if (!movies || movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]"> {/* Ekranı kaplayan mesaj için */}
        <p className="text-xl text-gray-500">No movies found.</p>
        <p className="text-gray-400">Try adding some via MockAPI!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-slate-700">
        All Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}