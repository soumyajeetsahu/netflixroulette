import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Paper, Typography, colors } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MoviesData } from '../../movieList/movieList';
import styles from "./movieTile.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface movieTileProps {
    movieData: MoviesData
    onMovieTileClick: (movieId: number) => void;
}

const MovieTile: React.FC<movieTileProps> = (props) => {
    const [iconClicked, setIconClicked] = useState(false);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");
    const sortBy = searchParams.get("sortBy");
    const genre = searchParams.get("genre");
    const navigate = useNavigate();
    const handleIconClick = (event: any) => {
        event.stopPropagation();
        setIconClicked(!iconClicked);
    }

    const editMovie = (event: React.MouseEvent,id: number) => {
        event.stopPropagation();
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
        navigate(`${id}/edit?${queryString}`);
    }

    const deleteMovie = (event: React.MouseEvent,id: number) => {
        event.stopPropagation();
        console.log(id)
    }

    return (
        <>
            <Card sx={{ width: 300, height: 480, backgroundColor: "secondary", position: 'relative', background: '#232323', cursor: 'pointer' }} onClick={() => props.onMovieTileClick(props.movieData.id)}>
                <Box position="relative">
                    <CardMedia
                        component="img"
                        height="380"
                        image={props.movieData.poster_path}
                        alt={props.movieData.title}
                        sx={{ objectFit: 'fill' }}
                    />
                    {!iconClicked ? <IconButton
                        onClick={handleIconClick}
                        aria-label="settings"
                        sx={{
                            position: 'absolute',
                            color: '#FFF',
                            top: 0,
                            right: 0,
                            opacity: 0,
                            transition: 'opacity 0.2s',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        <MoreVertIcon sx={{
                            backgroundColor: '#232323',
                            padding: 1,
                            borderRadius: '50%'
                        }} />
                    </IconButton> :
                        <Paper
                            onClick={handleIconClick}
                            aria-label="settings"
                            sx={{
                                position: 'absolute',
                                backgroundColor: '#232323',
                                color: '#FFF',
                                top: 10,
                                right: 10,
                                width: 150,
                                height: 80
                            }}
                        >
                            <CloseIcon sx={{ position: 'absolute', top: '0rem', right: '0rem', color: 'white', cursor: 'pointer', fontSize: 12 }} onClick={handleIconClick} />
                            <div className={styles.editDeleteFormDialog}>
                                <span onClick={(event) => editMovie(event,props.movieData.id)}>Edit</span>
                                <span onClick={(event) => deleteMovie(event,props.movieData.id)}>Delete</span>
                            </div>
                        </Paper>}
                </Box>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'centre', color: "#FFF" }}>
                    <Typography variant="subtitle1" component="div">
                        {props.movieData.title}
                    </Typography>
                    <Button variant="outlined" color='secondary' sx={{ color: '#FFF' }} size="small" disableRipple> {props.movieData.release_date.split('-')[0]}</Button>
                </CardContent>
                <CardActions>
                    <Typography variant="caption" color="text.secondary" sx={{ color: '#FFF' }}>
                        {props.movieData.genres && props.movieData.genres.map((genre, index) => (
                            <span key={genre}>
                                {genre}
                                {index !== props.movieData.genres.length - 1 && ', '}
                            </span>
                        ))}
                    </Typography>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieTile