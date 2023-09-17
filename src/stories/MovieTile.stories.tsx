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
        movieId: 1,
        movieName: 'Test Movie',
        releaseyear: 2020,
        genres: ['Action', 'Drama'],
        onMovieTileClick: action('onMovieTileClick'),
    },
};