import { MovieType } from "@/app/page";

export default function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className="w-48 h-64 bg-light-bg/20 rounded-2xl border-2 border-light-bg">
      <img src={movie.poster} alt={movie.name} />
      <h2>{movie.title}</h2>
    </div>
  );
}
