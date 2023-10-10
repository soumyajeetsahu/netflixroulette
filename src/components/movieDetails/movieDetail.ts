export interface MovieDetail {
  imageUrl?: string;
  movieName: string;
  releaseYear: number;
  rating: number;
  duration: string;
  description: string;
  genres: string[];
}

export const getMovieById = async ({ params }: any) => {
  const { movieId } = params;

  const url = `http://localhost:4000/movies/${movieId}`;
  const res = await fetch(url);
  return res.json();
};
