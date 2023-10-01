import React, { useEffect, useState } from 'react'
import MovieDetailsComponent from '../movieDetails/movieDetails';
import SearchForm from '../SearchForm/searchForm';
import Footer from '../Home/footer';
import ListMovies from '../listMovies/listMovies';
import styles from './movieListPage.module.scss'
import { Genres } from '../Genre/genres';
import { SortBy } from '../SortControl/sortBy';
import { MoviesData } from './movieList';
import { FetchMoviesParams, getAllMoviesList, getMovieById } from '../../services/movieService';


const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeGenre, setactiveGenre] = useState<string>('ALL');
    const [movieList, setMovieList] = useState<MoviesData[]>([]);
    const [selectedMovie, setselectedMovie] = useState<any>(null);
    const [sortByFieldName, setSortByFieldName] = useState<string>("");

    const handlebackToSearch = () => {
        setselectedMovie(null);
    }

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        updateMovieList({
            sortByField: sortByFieldName,
            searchQuery: query,
            genreName: activeGenre === "ALL" ? '' : activeGenre,
        });
    };

    const handleMovieTileClick = (id: number) => {
        getMovieById(id)
            .then((response) => {
                setselectedMovie(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGenreSelect = (genre: string) => {
        setactiveGenre(genre);
        updateMovieList({
            sortByField: sortByFieldName,
            searchQuery,
            genreName: genre === "ALL" ? '' : genre,
        });
    };

    const handleSortByChange = (value: string) => {
        setSortByFieldName(value)

        updateMovieList({
            sortByField: value,
            searchQuery,
            genreName: activeGenre === "ALL" ? '' : activeGenre,
        });
    }

    const updateMovieList = (params: FetchMoviesParams) => {
        getAllMoviesList(params)
            .then((response) => {
                setMovieList(response.data.data);
            })
            .catch(handleError);
    };


    const handleError = (error: any) => {
        console.log(error);
    };

    useEffect(() => {
        updateMovieList({});
    }, [])

    return (
        <>
            <div className={styles.homeContainer}>
                {selectedMovie ? <MovieDetailsComponent movieDetails={selectedMovie} backToSeach={handlebackToSearch} /> :
                    <SearchForm initialQuery={searchQuery} onSearch={handleSearch} />}
                <ListMovies onMovieTileClick={handleMovieTileClick} handleSortByChange={handleSortByChange} SortBy={SortBy}
                    genres={Genres} activeGenre={activeGenre} handleGenreSelect={handleGenreSelect} MovieList={movieList} />
                <Footer />
            </div>
        </>

    )
}

export default MovieListPage;