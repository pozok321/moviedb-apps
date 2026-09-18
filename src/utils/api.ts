import { TMDBResponse, Movie, TVShow, Person, MovieDetail, More } from "@/types/movie";

// Base Configuration untuk efisiensi kode
const BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = {
  accept: "application/json",
  Authorization: process.env.TMDB_TOKEN || "",
};

// Helper function untuk fetcher agar Anda tidak perlu menulis try-catch berulang kali
async function fetchFromTMDB<T>(endpoint: string, revalidateTime = 86400): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: HEADERS,
    next: { revalidate: revalidateTime },
  });

  if (!res.ok) {
    console.error(`🔴 TMDB Error [${endpoint}]: ${res.status} ${res.statusText}`);
    throw new Error(`Gagal mengambil data dari TMDB (Status: ${res.status})`);
  }

  return res.json();
}

/* ─── 1. API TRENDING (HOMEPAGE) ─── */
export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse<Movie>>("/trending/movie/day?language=en-US");
  return data.results;
}

/* ─── 2. API MULTI SEARCH (UNTUK SEARCH PAGE) ─── */
// Fungsi ini bisa langsung mencari Movies, TV, dan People sekaligus ala TMDB
export async function searchMulti(query: string, page = 1): Promise<TMDBResponse<any>> {
  if (!query) return { page: 1, results: [], total_pages: 0, total_results: 0 };
  
  return fetchFromTMDB<TMDBResponse<any>>(
    `/search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`,
    0 // Set revalidate ke 0 karena hasil pencarian harus dinamis / real-time
  );
}

/* ─── 3. API DETAIL (UNTUK DETAIL PAGE) ─── */
export async function getMovieDetails(id: string): Promise<MovieDetail> {
  return fetchFromTMDB<MovieDetail>(`/movie/${id}?language=en-US`);
}

/* ─── 4. API TV SHOWS ─── */
export async function getTrendingTVShows(): Promise<TVShow[]> {
  const data = await fetchFromTMDB<TMDBResponse<TVShow>>("/trending/tv/day?language=en-US");
  return data.results;
}

/* ─── 5. API PEOPLE ─── */
export async function getPopularPeople(): Promise<Person[]> {
  const data = await fetchFromTMDB<TMDBResponse<Person>>("/person/popular?language=en-US");
  return data.results;
}

/* ─── 6. API GENRES ─── */
export async function getMovieGenres(): Promise<{ id: number; name: string }[]> {
  const data = await fetchFromTMDB<{ genres: { id: number; name: string }[] }>("/genre/movie/list?language=en-US");
  return data.genres;
}

/* ─── 7. API MORE (CUSTOM) ─── */
export async function getMoreData(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse<Movie>>("/trending/movie/day?language=en-US");
  return data.results;
}

export async function getMoreDetails(id: string): Promise<More> {
  return fetchFromTMDB<More>(`/movie/${id}?language=en-US`);
}

