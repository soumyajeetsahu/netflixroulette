import React, { useState } from 'react';
import "./searchForm.scss";

interface SearchFormProps {
  initialQuery?: string;
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState(props.initialQuery || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-form">
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="search">
          <input type="text" className="search-input" placeholder="What do you want to watch?" value={searchTerm} onChange={handleChange} />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;