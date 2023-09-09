import React from 'react'
import './listMovies.scss';
import GenreSelect from '../Genre/genreSelect';

const listMovies: React.FC = () => {
    return (
        <div className='listMovies-Container'>
            <GenreSelect />
        </div>
    )
}

export default listMovies