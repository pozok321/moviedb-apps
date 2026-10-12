import { useState } from 'react';
import { Movie } from '@/types/movie'; // Sesuaikan path-nya

export default function Watchlist() {
  // 1. State untuk nyimpen list film (Array dari Movie)
  // Awalnya kosong, jadi kita kasih tahu TS isinya Movie[]
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  // 2. State untuk input judul film baru dari user (String)
  const [inputTitle, setInputTitle] = useState<string>('');

  // 3. Fungsi buat nambahin film
  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputTitle.trim()) return;

    // Bikin objek film baru sesuai interface Movie
    const newMovie: Movie = {
      id: Date.now(), // ID pake timestamp biar unik
      title: inputTitle,
      original_title: inputTitle,
      overview: '',
      backdrop_path: '',
      release_date: '',
      poster_path: '/default-poster.jpg',
      adult: false,
      vote_average: 8.5,
      vote_count: 0,
      rating: 8.5,
    };

    // Masukin ke state watchlist (spread operator)
    setWatchlist([...watchlist, newMovie]);
    
    // Reset inputan
    setInputTitle('');
  };

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">My TMDB Watchlist</h2>
        <form
        onSubmit={handleAddMovie} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputTitle}
          // Typing event di React input: React.ChangeEvent<HTMLInputElement>
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputTitle(e.target.value)}
          placeholder="Judul film..."
          className="px-3 py-2 bg-slate-800 rounded border border-slate-700 flex-1"
        />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700">
          Tambah
        </button>
      </form>
      <ul className="space-y-2">
        {watchlist.map((movie) => (
          <li key={movie.id} className="bg-slate-800 p-3 rounded flex justify-between items-center">
            <span>{movie.title}</span>
            <span className="text-yellow-400 text-sm">⭐ {movie.rating}</span>
          </li>
        ))}
      </ul>

      {/* Info helper */}
      <p className="text-xs text-slate-400 mt-4">Total film di watchlist: {watchlist.length}</p>
    </div>
  );
}
