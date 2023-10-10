import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getMovieById } from '../../services/movieService';
import MovieDetails from './movieDetails';
import { MoviesData } from '../movieList/movieList';


const MovieInfo: React.FC = () => {
    const movie  = useLoaderData() as MoviesData;

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");
    const navigate = useNavigate();
    const sortBy = searchParams.get("sortBy");
    const genre = searchParams.get("genre");

    const handlebackToSearch = () => {
        const newSearchParams = new URLSearchParams();
        if (searchQuery && searchQuery != null) {
            newSearchParams.set('query', searchQuery);
        }
        if (sortBy && sortBy != null) {
            newSearchParams.set('sortBy', sortBy);
        }

        if (genre && genre != "ALL") {
            newSearchParams.set('genre', genre);
        }
        const queryString = newSearchParams.toString();
        navigate(`/?${queryString}`);
    }

    return (
        <div>
            {movie && movie.id ? (
                <MovieDetails movieDetails={movie} backToSeach={handlebackToSearch} />
            ) : (
                <></>
            )}
        </div>
    );
}

export default MovieInfo;
