import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../Home/header/header';
import SearchForm from '../SearchForm/searchForm';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders the header correctly', () => {
    render(<Header />);

    expect(screen.getByText('netflixroulette')).toBeInTheDocument();
    expect(screen.getByText('+ add movie')).toBeInTheDocument();
    expect(screen.getByText('FIND YOUR MOVIE')).toBeInTheDocument();
  });

  it('calls the onSearch function with the entered search term', () => {
    const handleSearch = jest.fn();
    render(<SearchForm initialQuery="Test" onSearch={handleSearch} />);

    fireEvent.change(screen.getByPlaceholderText("What do you want to watch?"), {
      target: { value: 'New Movie' },
    });

    fireEvent.click(screen.getByText("Search"));

    expect(handleSearch).toHaveBeenCalledTimes(1);

    expect(handleSearch).toHaveBeenCalledWith('New Movie');
    expect(handleSearch).toHaveBeenCalledWith('New Movie');
  });
});