import React from 'react'
import { MovieDetail } from './movieDetail'
import { Typography } from '@mui/material'
import styles from './movieDetails.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { MoviesData } from '../movieList/movieList';

interface movieDetailsProps {
    movieDetails: MoviesData;
    backToSeach: () => void;
}

const MovieDetails: React.FC<movieDetailsProps> = (props) => {

    return (
        <>
            <div className={styles.pageTitle}>
                <span>netflixroulette</span>
                <span><SearchIcon onClick={props.backToSeach} /></span>
            </div>
            <div className={styles.movieDetailsContainer}>
                <div className={styles.movieDetailImage}>
                    <img src={props.movieDetails.poster_path} alt={props.movieDetails.title} />
                </div>

                <div className={styles.movieDetailsTypography}>
                    <div className={styles.movieName}>
                        <Typography variant='h4'>
                            {props.movieDetails.title}
                        </Typography>
                        <span className={styles.rating}>{props.movieDetails.vote_average}</span>
                    </div>

                    <Typography variant='caption' gutterBottom>
                        {props.movieDetails.genres.map((genre, index) => (
                            <span key={genre}>
                                {genre}
                                {index !== props.movieDetails.genres.length - 1 && ', '}
                            </span>))}
                    </Typography>
                    <span className={styles.yearDuration}>
                        <a className={styles.releaseYear}>{props.movieDetails.release_date.split('-')[0]}</a>
                        <a className={styles.duration}>{`${Math.floor(props.movieDetails.runtime / 60)}h ${props.movieDetails.runtime % 60}min`}</a>
                    </span>
                    <Typography variant='body2'> {props.movieDetails.overview}</Typography>
                </div>
            </div></>

    )
}

export default MovieDetails