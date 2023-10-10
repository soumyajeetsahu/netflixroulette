import { action } from "@storybook/addon-actions";
import MovieTile from "../components/listMovies/MovieTile/movieTile";
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: 'MovieTile',
    component: MovieTile,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof MovieTile>;


export default meta;
type Story = StoryObj<typeof meta>;

export const movieTileProps: Story = {
    args: {
        movieData: {
            "id": 338970,
            "title": "Tomb Raider",
            "tagline": "Her legend begins",
            "vote_average": 6.2,
            "vote_count": 817,
            "release_date": "2018-03-08",
            "poster_path": "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
            "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
            "budget": 94000000,
            "revenue": 126025000,
            "genres": [
                "Action",
                "Adventure"
            ],
            "runtime": 118
        },
        onMovieTileClick: action('onMovieTileClick'),
    },
};