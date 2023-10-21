import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieTile from '../listMovies/MovieTile/movieTile';
import { MemoryRouter } from 'react-router-dom';

describe('MovieTile', () => {
  const mockOnClick = jest.fn();
  const movieTileProps = {
    movieData: {
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
    onMovieTileClick: mockOnClick,
  };

  const renderWithRouter = (component: any) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  test('renders tile and shows movie name', () => {
    renderWithRouter(<MovieTile {...movieTileProps} />);
    expect(screen.getByText('Fifty Shades Freed')).toBeInTheDocument();
  });

  test('triggers onMovieTileClick when the tile is clicked', () => {
    renderWithRouter(<MovieTile {...movieTileProps} />);
    fireEvent.click(screen.getByText('Fifty Shades Freed'));
    expect(mockOnClick).toHaveBeenCalledWith(337167);
  });
});