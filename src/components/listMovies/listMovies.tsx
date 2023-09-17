import React, { useState } from 'react'
import './listMovies.scss';
import GenreSelect from '../Genre/genreSelect';
import { Genres } from '../Genre/genres';
import SortControl from '../SortControl/sortControl';
import { SortBy } from '../SortControl/sortBy';
import MovieTile from './MovieTile/movieTile';
import { MovieList } from './movieList';
import styles from './listMovies.module.scss';

const listMovies: React.FC<any> = (props) => {

    const [selectedGenre, setSelectedGenre] = useState('ALL');

    const handleGenreSelect = (genreName: string) => {
        setSelectedGenre(genreName);
    };

    const handleSortByChange = (value: string) => {
        console.log(value)
    }

    return (
        <>
            <div className='listMovies-Container'>
                <GenreSelect genres={Genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
                <SortControl onSortByChange={handleSortByChange} sortByList={SortBy} defaultValue={SortBy[0].value} />
            </div>

            <div className={styles.movieTiles}>
                {MovieList.map((movie) => (<MovieTile key={movie.id} movieName={movie.movieName} releaseyear={movie.releaseYear} genres={movie.genres} movieId={movie.id}
                    imageUrl={''} onMovieTileClick={props.onMovieTileClick} />))}
            </div>
        </>

    )
}

export default listMovies