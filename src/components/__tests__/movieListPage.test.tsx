import MovieListPage from '../movieList/movieListPage';
import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios, { AxiosResponse } from 'axios';
import userEvent from '@testing-library/user-event';

describe('MovieListPage', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    beforeEach(() => {
        const mAxiosResponse = {
            data: {
                data: [
                    {
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
                    }]
            }
            ,
        } as AxiosResponse;
        jest.spyOn(axios, 'get')
            .mockResolvedValueOnce(mAxiosResponse);
    })


    test('renders Header and ListMovies components when showMovieDetails is false', () => {
        render(<MovieListPage />);

        expect(screen.getByText('FIND YOUR MOVIE')).toBeInTheDocument();
        const input = screen.getByPlaceholderText('What do you want to watch?');

        expect(input).toBeInTheDocument();
    });

    test('renders MovieDetailsComponent when movie tile is clicked', async () => {
        render(<MovieListPage />);

        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
        const movieTile = screen.getByText('Fifty Shades Freed');
        fireEvent.click(movieTile);
        await waitForElementToBeRemoved(() => screen.getByText('FIND YOUR MOVIE'));
        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    });

    test('hides MovieDetailsComponent and shows Header when backToSearch is called', async () => {
        render(<MovieListPage />);

        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
        const movieTile = screen.getByText('Fifty Shades Freed');
        fireEvent.click(movieTile);
        await waitForElementToBeRemoved(() => screen.getByText('FIND YOUR MOVIE'));
        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
        const backButton = screen.getByTestId('SearchIcon');
        fireEvent.click(backButton);

        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
    });

    test('calls "onSelect" callback with correct genre after clicking a genre button', async () => {
        render(<MovieListPage />);
        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
        const genreButton = screen.getByText('Documentary');
        fireEvent.click(genreButton);
        const selectedGenre = screen.getByText('Documentary');
        expect(selectedGenre.closest('a')).toHaveClass('active');
    });

    test('calls "onSelect" callback with correct genre after clicking a genre button', async () => {
        render(<MovieListPage />);
        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
        const genreButton = screen.getByText('Documentary');
        fireEvent.click(genreButton);
        const selectedGenre = screen.getByText('Documentary');
        expect(selectedGenre.closest('a')).toHaveClass('active');
    });

    test('calls the onSearch function with the entered search term', async () => {
        const component = render(<MovieListPage/>);
        expect(await screen.findByText('Fifty Shades Freed')).toBeInTheDocument();
        fireEvent.change(screen.getByPlaceholderText("What do you want to watch?"), {
          target: { value: 'Fifty Shades Freed' },
        });
    
        fireEvent.click(screen.getByText("Search"));
        expect(component.baseElement).toMatchSnapshot();
      });
});