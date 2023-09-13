import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenreSelect from '../Genre/genreSelect';
import { Genres } from '../Genre/genres';


test('renders all genres passed in props', () => {
  render(<GenreSelect genres={Genres} selectedGenre="ALL" onSelect={() => {}} />);

  Genres.forEach((genre) => {
    expect(screen.getByText(genre.name)).toBeInTheDocument();
  });
});

test('highlights the selected genre passed in props', () => {
  render(<GenreSelect genres={Genres} selectedGenre="Documentary" onSelect={() => {}} />);

  const selectedGenre = screen.getByText('Documentary');
  expect(selectedGenre.closest('a')).toHaveClass('active');
});

test('calls "onSelect" callback with correct genre after clicking a genre button', () => {
  const handleOnSelect = jest.fn();
  render(<GenreSelect genres={Genres} selectedGenre="Comedy" onSelect={handleOnSelect} />);

  const genreButton = screen.getByText('Horror');
  fireEvent.click(genreButton);

  expect(handleOnSelect).toHaveBeenCalledTimes(1);
  expect(handleOnSelect).toHaveBeenCalledWith('Horror');
});