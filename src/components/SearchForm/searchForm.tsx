import React, { useState } from 'react';
import styles from './searchForm.module.scss'
import MovieForm from '../modals/MovieForm/movieForm';
import dayjs from 'dayjs';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const initialValues = {
  "title": "La La Land",
  "tagline": "Here's to the fools who dream.",
  "vote_average": 7.9,
  "vote_count": 6782,
  "release_date": "2016-12-29",
  "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
  "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  "budget": 30000000,
  "revenue": 445435700,
  "runtime": 128,
  "genres": [
    "Comedy",
    "Drama",
    "Romance"
  ],
  "id": 313369
}

const SearchForm: React.FC<{}> = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const sortBy = searchParams.get("sortBy");
  const genre = searchParams.get("genre");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery ? searchQuery : "");

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
    navigate(`/new?${queryString}`);
  };

  const navigateAndRefreshHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.headerDiv}>
      <div className={styles.pageTitle} onClick={navigateAndRefreshHome}>netflixroulette</div>
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
      <Outlet />
    </div>
  );
};

export default SearchForm;