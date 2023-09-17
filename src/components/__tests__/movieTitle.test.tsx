import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieTile from '../listMovies/MovieTile/movieTile';

describe('MovieTile', () => {
    
    test('renders tile and shows movie name', () => {
      const mockOnClick = jest.fn();
      const movieTileProps = {
        movieId: 1,
        movieName: 'Test Movie',
        releaseyear: 2020,
        genres: ['Action', 'Drama'],
        imageUrl: '',
        onMovieTileClick: mockOnClick,
      };
  
      render(<MovieTile {...movieTileProps} />);
  
      expect(screen.getByText('Test Movie')).toBeInTheDocument();
    });
  
    test('triggers onMovieTileClick when the tile is clicked', () => {
      const mockOnClick = jest.fn();
      const movieTileProps = {
        movieId: 1,
        movieName: 'Test Movie',
        releaseyear: 2020,
        genres: ['Action', 'Drama'],
        imageUrl: '',
        onMovieTileClick: mockOnClick,
      };
  
      render(<MovieTile {...movieTileProps} />);
  
      fireEvent.click(screen.getByText('Test Movie'));
      
      expect(mockOnClick).toHaveBeenCalledWith(1);
    });
  });