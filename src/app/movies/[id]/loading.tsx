export default function LoadingMovieDetail() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-slate-700"></div>
      <p className="ml-4 text-xl text-slate-600">Loading movie details...</p>
    </div>
  );
}