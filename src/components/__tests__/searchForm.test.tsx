import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../SearchForm/searchForm';
import userEvent from '@testing-library/user-event';

test('renders an input with the initial search query passed in props', () => {
    render(<SearchForm initialQuery="initial value" onSearch={() => {}} />);
    const input = screen.getByPlaceholderText('What do you want to watch?') as HTMLInputElement;
    expect(input.value).toBe('initial value');
  });

  it('renders the header correctly', () => {
    render(<SearchForm initialQuery="initial value" onSearch={() => {}} />);

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

  test('calls the "onSearch" prop with the proper value after typing in the input and clicking the Search button', () => {
    const handleOnSearch = jest.fn();
    render(<SearchForm initialQuery="" onSearch={handleOnSearch} />);
  
    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'test movie' } });
  
    const submitButton = screen.getByText(/^Search$/i);
    fireEvent.click(submitButton);
  
    expect(handleOnSearch).toHaveBeenCalledTimes(1);
    expect(handleOnSearch).toHaveBeenCalledWith('test movie');
  });

  test('calls the "onSearch" prop with the proper value after typing in the input and pressing Enter key', () => {
    const handleOnSearch = jest.fn();
    render(<SearchForm initialQuery="" onSearch={handleOnSearch} />);
    
    const input = screen.getByPlaceholderText('What do you want to watch?');

    userEvent.type(input, "test movie");
    userEvent.type(input, "{enter}");
  
    expect(handleOnSearch).toHaveBeenCalledTimes(1);
    expect(handleOnSearch).toHaveBeenCalledWith('test movie');
  });