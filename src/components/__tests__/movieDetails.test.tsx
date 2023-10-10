import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from '../movieDetails/movieDetails';

describe('MovieDetails', () => {

  const mockBackToSearch = jest.fn();
  const movieDetailsProps = {
    movieDetails: {
      "id": 337167,
      "title": "Fifty Shades Freed",
      "tagline": "Don't miss the climax",
      "vote_average": 6.1,
      "vote_count": 1195,
      "release_date": "2018-02-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      "budget": 55000000,
      "revenue": 136906000,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": 106
    },
    backToSeach: mockBackToSearch,
  };

  test('renders movie details from props', () => {

    render(<MovieDetails {...movieDetailsProps} />);

    expect(screen.getByText('Fifty Shades Freed')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('1h 46min')).toBeInTheDocument();
  });

  test('triggers backToSearch when the search icon is clicked', () => {

    render(<MovieDetails {...movieDetailsProps} />);
    fireEvent.click(screen.getByTestId('SearchIcon'));

    expect(mockBackToSearch).toHaveBeenCalledTimes(1);
  });
});