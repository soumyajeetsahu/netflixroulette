import React, { useState } from 'react'
import Header from './header/header'
import './home.scss';
import ListMovies from '../listMovies/listMovies';
import MovieDetailsComponent from '../movieDetails/movieDetails';
import image_url from '../../assets/images/movie_1.png';
import Footer from './footer';

const Home: React.FC = () => {

  const [showMovieDetails, setShowMoviewDeatils] = useState(false);

  const handleMovietileClick = (id: number) => {
    setShowMoviewDeatils(true);
  }

  const handlebackToSeach = () => {
    setShowMoviewDeatils(false);
  }

  const MovieDetailsData = {
    imageUrl: image_url,
    movieName: "Pulp Fiction",
    releaseYear: 1994,
    rating: 8.9,
    duration: "2h 34min",
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    genres: ["Action & Adventure"],
  };

  return (
    <div className='home-container'>
      {showMovieDetails ? <MovieDetailsComponent movieDetails={MovieDetailsData} backToSeach={handlebackToSeach} /> : <Header />}
      <ListMovies onMovieTileClick={handleMovietileClick} />

      <Footer/>
    </div>
  )
}

export default Home