import React, { useState } from 'react';
import './header.scss';
import SearchForm from '../../SearchForm/searchForm';
import MovieForm from '../../modals/MovieForm/movieForm';
import dayjs from 'dayjs';
import DeleteMovie from '../../modals/deleteMovie/deleteMovie';

const initialValues = {
  title: 'Test Movie Name',
  releaseDate: dayjs('1994-02-28'),
  movieUrl: 'https://demomovie.com',
  rating: 9.2,
  genre: ['ACTION'],
  runtime: '2h 43min',
  overview: 'Some description',
};

const Header: React.FC = () => {
  const [addMovieVisible, setAddMovieVisible] = useState(false);

  const handleSearch = (query: string) => {
    // console.log('Search value:', query);
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
    <div className="header-div">
      <div className="page-title">netflixroulette</div>
      <div className="addButton-div">
        <button className="add-button" onClick={openAddMovie} >+ add movie</button>
        
      </div>

      <div className="page-label">FIND YOUR MOVIE</div>
      <SearchForm initialQuery="Test" onSearch={handleSearch} />

      {addMovieVisible && <MovieForm onSubmit={handleSubmit} initialData = {initialValues} onClose={closeAddMovie} />}

      {/* {addMovieVisible && <DeleteMovie />} */}
    </div>
  );
};

export default Header;