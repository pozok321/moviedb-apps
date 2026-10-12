// ─── INTERFACE UTAMA UNTUK WRAPPER RESPONS API TMDB ───
export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

// ─── 1. INTERFACE MOVIE (STANDAR) ───
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type?: "movie";
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  rating: number;
  backdrop_path_url?: string; // custom helper jika Anda memproses URL penuh
}

// ─── 2. INTERFACE TV SHOW ───
export interface TVShow {
  id: number;
  name: string;                // TV Show menggunakan 'name', bukan 'title'
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type?: "tv";
  first_air_date: string;     // TV Show menggunakan tanggal rilis perdana
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

// ─── 3. INTERFACE PERSON (AKTOR / CREW) ───
export interface Person {
  id: number;
  name: string;
  original_name: string;
  media_type?: "person";
  gender: number;             // 1 untuk Perempuan, 2 untuk Laki-laki
  profile_path: string | null; // Foto profil aktor/aktris
  known_for_department: string; // Contoh: "Acting", "Directing"
  known_for: (Movie | TVShow)[]; // Karya-karya terkenal mereka
}

// ─── 4. INTERFACE MOVIE DETAIL (LEBIH LENGKAP DARI MOVIE BIASA) ───
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDetail extends Movie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ProductionCompany[];
  revenue: number;
  runtime: number | null;     // Durasi film dalam menit
  status: string;             // Contoh: "Released", "Post Production"
  tagline: string | null;
}

export interface MovieApiResponse {
  page: number;
  total_pages: number;
  total_results: number;
  // Perhatikan sintaks Movie[]. Ini memberitahu TypeScript bahwa 
  // 'results' adalah sebuah array yang berisi kumpulan objek 'Movie'
  results: Movie[]; 
}

export interface More{
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}
