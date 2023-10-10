import MovieDetails from '../components/movieDetails/movieDetails';
import type { Meta, StoryObj } from '@storybook/react';
import image_url from '../assets/images/movie_1.png';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'MovieDetails',
  component: MovieDetails,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const MovieDetailsData = {
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
};

export const movieDetailsProps: Story = {
  args: {
    movieDetails: MovieDetailsData,
    backToSeach: action('searchIcon clicked')
  },
};

export const backToSeach: Story = {
  ...movieDetailsProps,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByTestId('SearchIcon');

    await userEvent.click(submitButton);
  },
};