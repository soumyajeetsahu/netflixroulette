import React, { useEffect, useState } from 'react';
import { Genres } from './genres';
import './genres.scss';

const GenreSelect: React.FC = () => {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [activeGenre, setActiveGenre] = useState<string | null>('ALL');

  useEffect(() => {
    setGenres(Genres);
  }, []);

  const handleGenreClick = (genreName: string) => {
    setActiveGenre(genreName);
  };

  return (
    <div className="genre-container">
      <div className="genres-line">
        {genres.map((genre) => (
          <a
            key={genre.id}
            className={`genres ${genre.name === activeGenre ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre.name)}
          >
            <span>{genre.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GenreSelect;
