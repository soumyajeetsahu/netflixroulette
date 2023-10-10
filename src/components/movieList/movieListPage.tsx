import React, { useEffect, useState } from 'react'
import Footer from '../Home/footer';
import ListMovies from '../listMovies/listMovies';
import styles from './movieListPage.module.scss'
import { Genres } from '../Genre/genres';
import { SortBy } from '../SortControl/sortBy';
import { MoviesData } from './movieList';
import { FetchMoviesParams, getAllMoviesList } from '../../services/movieService';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';


const MovieListPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const sortBy = searchParams.get("sortBy");
    const genre = searchParams.get("genre");
    const navigate = useNavigate();
    const [activeGenre, setactiveGenre] = useState<string>(genre ? genre : 'ALL');
    const [movieList, setMovieList] = useState<MoviesData[]>([]);

    const handleMovieTileClick = (id: number) => {
        const newSearchParams = new URLSearchParams();
        if (query && query != null) {
            newSearchParams.set('query', query);
        }
        if (sortBy && sortBy != null) {
            newSearchParams.set('sortBy', sortBy);
        }

        if (genre && genre != "ALL") {
            newSearchParams.set('genre', genre);
        }
        const queryString = newSearchParams.toString();
        navigate(`${id}?${queryString}`);
    }

    const handleGenreSelect = (genre: string) => {
        setactiveGenre(genre);
        const newSearchParams = new URLSearchParams();
        if (query && query != null) {
            newSearchParams.set('query', query);
        }
        if (sortBy && sortBy != null) {
            newSearchParams.set('sortBy', sortBy);
        }

        if (genre && genre != "ALL") {
            newSearchParams.set('genre', genre);
        }
        const queryString = newSearchParams.toString();
        navigate(`?${queryString}`);
    };

    const handleSortByChange = (value: string) => {
        const newSearchParams = new URLSearchParams();
        if (query && query != null) {
            newSearchParams.set('query', query);
        }
        if (value) {
            newSearchParams.set('sortBy', value);
        }
        if (genre) {
            newSearchParams.set('genre', genre);
        }
        const queryString = newSearchParams.toString();
        navigate(`?${queryString}`);
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
        updateMovieList({ searchQuery: query ? query : "", sortByField: sortBy ? sortBy : "", genreName: genre ? genre : "" });
    }, [query, sortBy, genre])

    return (
        <>
            <div className={styles.homeContainer}>
                <Outlet />
                <ListMovies onMovieTileClick={handleMovieTileClick} handleSortByChange={handleSortByChange} SortBy={SortBy}
                    genres={Genres} activeGenre={activeGenre} handleGenreSelect={handleGenreSelect} MovieList={movieList} />
                <Footer />
            </div>
        </>

    )
}

export default MovieListPage;