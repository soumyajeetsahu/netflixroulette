import React, { useEffect, useState } from 'react';
import './genres.scss';

interface Genre {
  id: number;
  name: string;
}

interface GenreSelectProps {
  genres: Genre[];
  selectedGenre: string;
  onSelect: (genreName: string) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = (props) => {
  const [activeGenre, setActiveGenre] = useState<string | null>(props.selectedGenre);

  useEffect(() => {
    
  }, []);

  const handleGenreClick = (genreName: string) => {
    setActiveGenre(genreName);
    props.onSelect(genreName);
  };

  return (
    <div className="genre-container">
      <div className="genres-line">
        {props.genres.map((genre) => (
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
