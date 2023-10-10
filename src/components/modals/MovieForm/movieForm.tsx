import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import styles from './movieForm.module.scss'
import { Button, Checkbox, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Genres } from '../../Genre/genres';

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

interface MovieFormDatatype {
    title?: string;
    releaseDate?: dayjs.Dayjs,
    movieUrl?: string,
    rating?: number,
    genre?: string[],
    runtime?: string,
    overview?: string,
}

interface MovieFormProps {
    initialData?: MovieFormDatatype;
    onSubmit: (data: MovieFormDatatype) => void;
    onClose: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialData, onSubmit, onClose }) => {
    const [formValues, setFormValues] = useState<MovieFormDatatype>(initialData ? initialData : {});
    const [genreName, setgenreName] = React.useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    const handleGenreChange = (event: SelectChangeEvent<typeof genreName>) => {
        const {
            target: { value },
        } = event;
        setgenreName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    if (!portalRoot) {
        portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', 'portal')
        document.body.appendChild(portalRoot)
    }

    return ReactDom.createPortal(
        <div className={`${styles.addMovieContainer}, ${styles.modalOverlay}`}>
            <div className={styles.modalContent}>
                <CloseIcon sx={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', cursor: 'pointer' }} onClick={onClose} />
                <Typography sx={{ color: 'white' }} gutterBottom variant="h5">ADD MOVIE</Typography>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <span className={styles.formField}>
                            <label>TITLE</label>
                            <TextField sx={{
                                background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }
                            }} id="outlined-basic" label="" variant="filled" onChange={handleInputChange} name="title" value={formValues.title} data-testid="titleInput" />
                        </span>
                        <span className={styles.formField}>
                            <label>RELEASE DATE</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker value={formValues.releaseDate} sx={{
                                    background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }
                                }} />
                            </LocalizationProvider>
                        </span>
                    </div>
                    <div className={styles.formRow}>
                        <span className={styles.formField}>
                            <label>MOVIE URL</label>
                            <TextField sx={{
                                background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }, width: "250px"
                            }} placeholder=" https://" id="outlined-basic" label="" variant="filled" name="movieUrl" value={formValues.movieUrl} />
                        </span>
                        <span className={styles.formField}>
                            <label>RATING</label>
                            <TextField type='number' sx={{
                                background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }
                            }} placeholder='7.8' id="outlined-basic" label="" variant="filled" name="rating" value={formValues.rating} />
                        </span>
                    </div>
                    <div className={styles.formRow}>
                        <span className={styles.formField}>
                            <label>GENRE</label>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={genreName}
                                onChange={handleGenreChange}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                sx={{
                                    background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }, width: "250px"
                                }}
                            >
                                {Genres.map((genre) => (
                                    <MenuItem key={genre.id} value={genre.name}>
                                        <Checkbox checked={genreName.indexOf(genre.name) > -1} />
                                        <ListItemText primary={genre.name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </span>
                        <span className={styles.formField}>
                            <label>RUNTIME</label>
                            <TextField sx={{
                                background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }
                            }} id="outlined-basic" label="" variant="filled" name="runtime" value={formValues.runtime} />
                        </span>
                    </div>
                    <div className={styles.description}>
                        <span className={styles.formField}>
                            <label>OVERVIEW</label>
                            <TextField sx={{
                                background: "rgba(50, 50, 50, 0.8)", '& .MuiInputBase-input': { color: 'white' }, width: '100%'
                            }} multiline
                                rows={4} id="outlined-basic" label="" name="overview" value={formValues.overview} />
                        </span>
                    </div>
                    <div className={styles.formButton}>
                        <Button variant="outlined">RESET</Button>
                        <Button type='submit' variant="contained">SUBMIT</Button>
                    </div>
                </form></div>

        </div>, portalRoot
    )
}

export default MovieForm