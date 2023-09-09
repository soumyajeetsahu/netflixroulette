import React, { useState } from 'react';
import "./searchForm.scss";

const SearchForm: React.FC = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input type="text" className="search-input" placeholder="What do you want to watch?" value={searchTerm} onChange={handleChange} />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;