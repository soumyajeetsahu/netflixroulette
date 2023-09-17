import Home from "../Home/home";
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home', () => {
    test('renders Header and ListMovies components when showMovieDetails is false', () => {
        render(<Home />);

        expect(screen.getByText('FIND YOUR MOVIE')).toBeInTheDocument();
        const input = screen.getByPlaceholderText('What do you want to watch?');

        expect(input).toBeInTheDocument();
    });

    test('renders MovieDetailsComponent when movie tile is clicked', () => {
        render(<Home />);

        const movieTile = screen.getByText('Reservoir dogs');
        fireEvent.click(movieTile);

        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    });

    test('hides MovieDetailsComponent and shows Header when backToSearch is called', () => {
        render(<Home />);

        const movieTile = screen.getByText('Reservoir dogs');
        fireEvent.click(movieTile);
        const backButton = screen.getByTestId('SearchIcon');
        fireEvent.click(backButton);

        expect(screen.getByText('FIND YOUR MOVIE')).toBeInTheDocument();
    });
});