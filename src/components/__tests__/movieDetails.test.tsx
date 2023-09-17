import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from '../movieDetails/movieDetails';

describe('MovieDetails', () => {
    
    const mockBackToSearch = jest.fn();
    const movieDetailsProps = {
      movieDetails: {
        imageUrl: '',
        movieName: 'Test Movie',
        releaseYear: 2023,
        rating: 8.5,
        duration: '2h',
        description: 'Test Movie description',
        genres: ['Action', 'Drama'],
      },
      backToSeach: mockBackToSearch,
    };

    test('renders movie details from props', () => {
 
      render(<MovieDetails {...movieDetailsProps} />);
  
      expect(screen.getByText('Test Movie')).toBeInTheDocument();
      expect(screen.getByText('8.5')).toBeInTheDocument();
      expect(screen.getByText('2023')).toBeInTheDocument();
      expect(screen.getByText('2h')).toBeInTheDocument();
      expect(screen.getByText('Drama')).toBeInTheDocument();
      expect(screen.getByText('Test Movie description')).toBeInTheDocument();
    });
  
    test('triggers backToSearch when the search icon is clicked', () => {
  
      render(<MovieDetails {...movieDetailsProps} />);  
      fireEvent.click(screen.getByTestId('SearchIcon'));
      
      expect(mockBackToSearch).toHaveBeenCalledTimes(1);
    });
  });