import React from 'react'
import { MovieDetail } from './movieDetail'
import { Typography } from '@mui/material'
import styles from './movieDetails.module.scss';
import SearchIcon from '@mui/icons-material/Search';

interface movieDetailsProps {
    movieDetails: MovieDetail;
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
                    <img src={props.movieDetails.imageUrl} alt={props.movieDetails.movieName} />
                </div>

                <div className={styles.movieDetailsTypography}>
                    <div className={styles.movieName}>
                        <Typography variant='h4'>
                            {props.movieDetails.movieName}
                        </Typography>
                        <span className={styles.rating}>{props.movieDetails.rating}</span>
                    </div>

                    <Typography variant='caption' gutterBottom>
                        {props.movieDetails.genres.map((genre, index) => (
                            <span key={genre}>
                                {genre}
                                {index !== props.movieDetails.genres.length - 1 && ', '}
                            </span>))}
                    </Typography>
                    <span className={styles.yearDuration}>
                        <a className={styles.releaseYear}>{props.movieDetails.releaseYear}</a>
                        <a className={styles.duration}>{props.movieDetails.duration}</a>
                    </span>
                    <Typography variant='body2'> {props.movieDetails.description}</Typography>
                </div>
            </div></>

    )
}

export default MovieDetails