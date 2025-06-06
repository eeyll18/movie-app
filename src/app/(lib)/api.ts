import { Movie } from "./types";

const API_BASE_URL = process.env.MOCKAPI_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("MOCKAPI_BASE_URL is not defined in .env.local");
}

export async function getMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(`${API_BASE_URL}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function getMovieById(id: string): Promise<Movie | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/${id}`);
    if (!res.ok) {
      if (res.status === 404) return null; 
      throw new Error(`Failed to fetch movie with id ${id}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching movie ${id}:`, error);
    return null;
  }
}
