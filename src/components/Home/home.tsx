import React from 'react'
import SearchForm from '../SearchForm/searchForm'
import Header from './header/header'
import './home.scss';
import ListMovies from '../listMovies/listMovies';

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <Header/>
      <ListMovies/>
    </div>
  )
}

export default Home