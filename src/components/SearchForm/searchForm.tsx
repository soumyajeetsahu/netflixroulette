import React, { useState } from 'react';
import styles from './searchForm.module.scss'
import MovieForm from '../modals/MovieForm/movieForm';
import dayjs from 'dayjs';
import { useNavigate, useSearchParams } from 'react-router-dom';

const initialValues = {
  title: 'Test Movie Name',
  releaseDate: dayjs('1994-02-28'),
  movieUrl: 'https://demomovie.com',
  rating: 9.2,
  genre: ['ACTION'],
  runtime: '2h 43min',
  overview: 'Some description',
};

const SearchForm: React.FC<{}> = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const sortBy = searchParams.get("sortBy");
  const genre = searchParams.get("genre");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery ? searchQuery : "");
  const [addMovieVisible, setAddMovieVisible] = useState(false);


  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSearchParams = new URLSearchParams();
    if (searchTerm && searchTerm != null) {
      newSearchParams.set('query', searchTerm);
    }

    if (sortBy && sortBy != null) {
      newSearchParams.set('sortBy', sortBy);
    }

    if (genre && genre != "ALL") {
      newSearchParams.set('genre', genre);
    }

    const queryString = newSearchParams.toString();
    navigate(`?${queryString}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const openAddMovie = () => {
    setAddMovieVisible(true);
  };

  const closeAddMovie = () => {
    setAddMovieVisible(false);
  };

  const handleSubmit = (data: any) => {
    console.log('Submitted data:', data);
    closeAddMovie();
  };

  return (
    <div className={styles.headerDiv}>
      <div className={styles.pageTitle}>netflixroulette</div>
      <div className={styles.addButtonDiv}>
        <button className={styles.addButton} onClick={openAddMovie} >+ add movie</button>
      </div>

      <div className={styles.pageLabel}>FIND YOUR MOVIE</div>
      <div className={styles.searchForm}>
        <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
          <div className={styles.search}>
            <input type="text" className={styles.searchInput} placeholder="What do you want to watch?"
              value={searchTerm} onChange={handleChange} />
            <button className={styles.searchButton} type="submit">Search</button>
          </div>
        </form>
      </div>
      {addMovieVisible && <MovieForm onSubmit={handleSubmit} initialData={initialValues} onClose={closeAddMovie} />}
    </div>
  );
};

export default SearchForm;