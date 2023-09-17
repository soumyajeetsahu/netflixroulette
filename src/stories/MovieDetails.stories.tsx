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
    imageUrl: image_url,
    movieName: "Pulp Fiction",
    releaseYear: 1994,
    rating: 8.9,
    duration: "2h 34min",
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    genres: ["Action & Adventure"],
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