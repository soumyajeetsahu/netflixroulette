import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import styles from './movieForm.module.scss'
import {
    Button,
    Checkbox,
    FormControl,
    FormHelperText,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Genres } from '../../Genre/genres';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';
import { addMovie, editMovie } from '../../../services/movieService';
import MessageDialogModal from '../messageDialogModal';
import { MoviesData } from '../../movieList/movieList';

let portalRoot = document.getElementById('portal-root')
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const MovieForm: React.FC = () => {
    const movie = useLoaderData() as MoviesData;
    const [genreName, setGenreName] = React.useState<string[]>([]);
    const [addMovieSucess, setAddMovieSucess] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: movie,
        mode: 'onChange',
    });

    const onSubmit = (data: any) => {
        const formattedData = {
            ...data,
            vote_average: parseFloat(data.vote_average),
            release_date: dayjs(data.release_date).format(),
            runtime: parseInt(data.runtime),
        };
        if (data && data.id) {
            editMovie(formattedData)
                .then((res) => {
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            addMovie(formattedData)
                .then((res) => {
                    console.log(res)
                    setAddMovieSucess(true);
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    };

    const handleReset = () => {
        reset();
        setGenreName([]);
    };

    const handleGenreChange = (event: SelectChangeEvent<typeof genreName>) => {
        const {
            target: { value },
        } = event;
        setGenreName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    if (!portalRoot) {
        portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', 'portal')
        document.body.appendChild(portalRoot)
    }

    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value)
            setValue('release_date', value.toString());
    };

    const closeModal = () => {
        navigate('/');
    }

    useEffect(() => {
        if (movie && movie.genres) {
            setGenreName(movie.genres);
        }
    }, [movie]);

    return ReactDOM.createPortal(
        <>
            {!addMovieSucess ? <div className={`${styles.addMovieContainer}, ${styles.modalOverlay}`}>
                <div className={styles.modalContent}>
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                        onClick={closeModal}
                    />
                    <Typography sx={{ color: 'white' }} gutterBottom variant="h5">
                        {movie && movie.id ? "EDIT MOVIE" : "ADD MOVIE"}
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formRow}>
                            <span className={styles.formField}>
                                <label>TITLE</label>
                                <TextField
                                    {...register('title', { required: 'Title is required' })}
                                    sx={{
                                        background: 'rgba(50, 50, 50, 0.8)',
                                        '& .MuiInputBase-input': { color: 'white' },
                                    }}
                                    id="outlined-title"
                                    label=""
                                    placeholder='Movie Name'
                                    variant="filled"
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />
                            </span>
                            <span className={styles.formField}>
                                <label>RELEASE DATE</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <FormControl variant="filled" sx={{ background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: "white" } }} error={!!errors.release_date}>
                                        <DatePicker
                                            {...register('release_date', { required: 'Release date is required' })}
                                            label=""
                                            value={movie?.release_date ? dayjs(movie.release_date) : null}
                                            onChange={handleDateChange}
                                        />
                                        {errors.release_date && (
                                            <FormHelperText error>{errors.release_date.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                </LocalizationProvider>
                            </span>
                        </div>
                        <div className={styles.formRow}>
                            <span className={styles.formField}>
                                <label>MOVIE URL</label>
                                <TextField
                                    {...register('poster_path', { required: 'Movie URL is required' })}
                                    sx={{
                                        background: 'rgba(50, 50, 50, 0.8)',
                                        '& .MuiInputBase-input': { color: 'white' },
                                        width: '250px',
                                    }}
                                    id="outlined-movie-url"
                                    label=""
                                    placeholder='https://'
                                    variant="filled"
                                    error={!!errors.poster_path}
                                    helperText={errors.poster_path?.message}
                                />
                            </span>
                            <span className={styles.formField}>
                                <label>RATING</label>
                                <TextField
                                    {...register('vote_average', { required: 'Rating is required' })}
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            step: "0.01",
                                        },
                                    }}
                                    sx={{
                                        background: "rgba(50, 50, 50, 0.8)",
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                            "-webkit-appearance": "textfield",
                                            "-moz-appearance": "textfield",
                                        },
                                        "& .MuiInputBase-input::-webkit-outer-spin-button, & .MuiInputBase-input::-webkit-inner-spin-button": {
                                            "-webkit-appearance": "none",
                                            margin: "0",
                                        },
                                    }}
                                    id="outlined-rating"
                                    label=""
                                    variant="filled"
                                    error={!!errors.vote_average}
                                    helperText={errors.vote_average?.message}
                                />
                            </span>
                        </div>
                        <div className={styles.formRow}>
                            <span className={styles.formField}>
                                <label>GENRE</label>
                                <Select
                                    {...register('genres', { required: 'Select At least one Genre.' })}
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={genreName}
                                    onChange={handleGenreChange}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    sx={{
                                        background: "rgba(50, 50, 50, 0.8)",
                                        "& .MuiInputBase-input": { color: "white" },
                                        width: "250px",
                                    }}
                                    error={!!errors.genres}
                                >
                                    {Genres.slice(1).map((genre) => (
                                        <MenuItem key={genre.id} value={genre.name}>
                                            <Checkbox checked={genreName.indexOf(genre.name) > -1} />
                                            <ListItemText primary={genre.name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                                {errors.genres && <FormHelperText error>{errors.genres.message}</FormHelperText>}
                            </span>
                            <span className={styles.formField}>
                                <label>RUNTIME</label>
                                <TextField
                                    {...register("runtime", { required: "Runtime is required" })}
                                    type="number"
                                    sx={{
                                        background: "rgba(50, 50, 50, 0.8)",
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                            "-webkit-appearance": "textfield",
                                            "-moz-appearance": "textfield",
                                        },
                                        "& .MuiInputBase-input::-webkit-outer-spin-button, & .MuiInputBase-input::-webkit-inner-spin-button": {
                                            "-webkit-appearance": "none",
                                            margin: "0",
                                        },
                                    }}
                                    id="outlined-runtime"
                                    placeholder="e.g., 108"
                                    variant="filled"
                                    error={!!errors.runtime}
                                    helperText={errors.runtime?.message}
                                />
                            </span>
                        </div>
                        <div className={styles.description}>
                            <span className={styles.formField}>
                                <label>OVERVIEW</label>
                                <TextField
                                    {...register('overview', { required: 'Overview is required' })}
                                    sx={{
                                        background: 'rgba(50, 50, 50, 0.8)',
                                        '& .MuiInputBase-input': { color: 'white' },
                                        width: '100%',
                                    }}
                                    multiline
                                    rows={5}
                                    id="outlined-overview"
                                    label=""
                                    variant="filled"
                                    error={!!errors.overview}
                                    helperText={errors.overview?.message}
                                />
                            </span>
                        </div>
                        <div className={styles.formButton}>
                            <Button variant="outlined" onClick={handleReset}>
                                RESET
                            </Button>
                            <Button type="submit" variant="contained">
                                SUBMIT
                            </Button>
                        </div>
                    </form>
                </div>
            </div> : <MessageDialogModal closeModal={closeModal} />}
        </>
        ,
        portalRoot
    );
};

export default MovieForm;