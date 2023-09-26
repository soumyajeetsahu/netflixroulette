import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, colors } from '@mui/material';
import React from 'react';
import MovieImage from '../../../assets/images/movie_1.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteMovie from '../../modals/deleteMovie/deleteMovie';

interface movieTileProps {
    movieId: number;
    movieName: string;
    releaseyear: number;
    genres: string[];
    imageUrl?: string;
    onMovieTileClick: (movieId: number) => void;
}

const MovieTile: React.FC<movieTileProps> = (props) => {

    return (
        <>
            <Card sx={{ width: 300, height: 480, backgroundColor: "secondary", position: 'relative', background: '#232323', cursor: 'pointer' }} onClick={() => props.onMovieTileClick(props.movieId)}>
                <Box position="relative">
                    <CardMedia
                        component="img"
                        height="380"
                        image={MovieImage}
                        alt="movie-image"
                        sx={{ objectFit: 'cover' }}
                    />
                    <IconButton
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
                    </IconButton>
                </Box>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'centre', color: "#FFF" }}>
                    <Typography variant="subtitle1" component="div">
                        {props.movieName}
                    </Typography>
                    <Button variant="outlined" color='secondary' sx={{ color: '#FFF' }} size="small" disableRipple> {props.releaseyear}</Button>
                </CardContent>
                <CardActions>
                    <Typography variant="caption" color="text.secondary" sx={{ color: '#FFF' }}>
                        {props.genres.map((genre, index) => (
                            <span key={genre}>
                                {genre}
                                {index !== props.genres.length - 1 && ', '}
                            </span>
                        ))}
                    </Typography>
                </CardActions>
            </Card>

            {/* <DeleteMovie /> */}
        </>
    )
}

export default MovieTile