import React, { useState } from 'react';
import styles from './searchForm.module.scss'

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
    <div className={styles.searchForm}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.search}>
          <input type="text" className={styles.searchInput} placeholder="What do you want to watch?" value={searchTerm} onChange={handleChange} />
          <button className={styles.searchButton} type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;