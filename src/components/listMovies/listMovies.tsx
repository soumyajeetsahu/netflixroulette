import React, { useState } from 'react'
import './listMovies.scss';
import GenreSelect from '../Genre/genreSelect';
import { Genres } from '../Genre/genres';

const listMovies: React.FC = () => {

    const [selectedGenre, setSelectedGenre] = useState('ALL');
    
    const handleGenreSelect = (genreName: string) => {
        setSelectedGenre(genreName);
        console.log('Selected genre:', genreName);
      };

    return (
        <div className='listMovies-Container'>
            <GenreSelect genres={Genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
        </div>
    )
}

export default listMovies