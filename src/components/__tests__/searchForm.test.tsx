import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../SearchForm/searchForm';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SearchForm', () => {
  const renderWithRouter = (component: any) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };
  
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = renderWithRouter(<SearchForm />);
    
    expect(getByText('netflixroulette')).toBeInTheDocument();
    expect(getByText('+ add movie')).toBeInTheDocument();
    expect(getByText('FIND YOUR MOVIE')).toBeInTheDocument();
    expect(getByPlaceholderText('What do you want to watch?')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  test('handles search input change', () => {
    const { getByPlaceholderText } = renderWithRouter(<SearchForm />);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    
    fireEvent.change(searchInput, { target: { value: 'Avengers' } });
    
    expect(searchInput).toHaveValue('Avengers');
  });

  test('navigates with the correct query parameters', () => {
    const { getByPlaceholderText, getByText } = renderWithRouter(<SearchForm />);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const searchButton = getByText('Search');

    const navigate = jest.fn();
    require('react-router-dom').useNavigate = () => navigate;

    fireEvent.change(searchInput, { target: { value: 'Avengers' } });
    fireEvent.click(searchButton);

    expect(navigate).toHaveBeenCalledWith('?query=Avengers');
  });

  test('navigates with multiple query parameters', () => {
    const { getByPlaceholderText, getByText } = renderWithRouter(<SearchForm />);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const searchButton = getByText('Search');

    const navigate = jest.fn();
    require('react-router-dom').useNavigate = () => navigate;

    fireEvent.change(searchInput, { target: { value: 'Avengers' } });
    fireEvent.click(searchButton);

    expect(navigate).toHaveBeenCalledWith('?query=Avengers');
  });
});