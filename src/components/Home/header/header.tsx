import React from 'react';
import './header.scss';
import SearchForm from '../../SearchForm/searchForm';

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    // console.log('Search value:', query);
  };

  return (
    <div className="header-div">
      <div className="page-title">netflixroulette</div>
      <div className="addButton-div">
        <button className="add-button">+ add movie</button>
      </div>

      <div className="page-label">FIND YOUR MOVIE</div>
      <SearchForm initialQuery="Test" onSearch={handleSearch} />
    </div>
  );
};

export default Header;