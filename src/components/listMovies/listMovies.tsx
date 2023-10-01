import React, { useState } from 'react'
import './listMovies.scss';
import GenreSelect from '../Genre/genreSelect';
import SortControl from '../SortControl/sortControl';
import MovieTile from './MovieTile/movieTile';
import styles from './listMovies.module.scss';
import { MovieListData, MoviesData } from '../movieList/movieList';

interface listMoviesProps {
    movieList: MoviesData,

}

const listMovies: React.FC<any> = (props) => {

    return (
        <>
            <div className='listMovies-Container'>
                <GenreSelect genres={props.genres} selectedGenre={props.activeGenre} onSelect={props.handleGenreSelect} />
                <SortControl onSortByChange={props.handleSortByChange} sortByList={props.SortBy}/>
            </div>

            <div className={styles.movieTiles}>
                {props.MovieList && props.MovieList.length > 0 ? props.MovieList.map((movie: MoviesData) =>
                (<MovieTile key={movie.id} movieData={movie}
                    onMovieTileClick={props.onMovieTileClick} />) ): <div style={{color:'#FFF'}}>No Movies Found!!</div>}
            </div>
        </>
    )
}

export default listMovies