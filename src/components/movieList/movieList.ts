export const MovieListDummy = [
  {
    id: 1,
    movieName: "Pulp Fiction",
    genres: ["Action & Adventure"],
    releaseYear: 2004,
  },
  {
    id: 6,
    movieName: "Reservoir dogs",
    genres: ["Oscar winning Movie"],
    releaseYear: 1995,
  },
  {
    id: 2,
    movieName: "Avengers: War of Infinity",
    genres: ["Action & Adventure"],
    releaseYear: 2014,
  },
  {
    id: 3,
    movieName: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    releaseYear: 2022,
  },
  {
    id: 4,
    movieName: "Kill Bill: Vol 2",
    genres: ["Oscar winning Movie"],
    releaseYear: 1994,
  },
  {
    id: 5,
    movieName: "Inception",
    genres: ["Action & Adventure"],
    releaseYear: 2006,
  },
];

export interface MovieListData {
  id: number;
  movieName: string;
  genres: string[];
  releaseYear: number;
}

export interface MoviesData {
	id: number;
	title: string;
	tagline: string;
	vote_average: number;
	vote_count: number;
	release_date: string;
	poster_path: string;
	overview: string;
	budget: number;
	revenue: number;
	genres: string[];
	runtime: number;
}