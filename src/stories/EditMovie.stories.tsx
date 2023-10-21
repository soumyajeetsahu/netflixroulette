import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MovieForm from '../components/modals/MovieForm/movieForm';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/styles';
import dayjs from 'dayjs';


const meta = {
  title: 'Edit Movie',
  component: MovieForm,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div id="portal-root">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MovieForm>;;

export default meta;
type Story = StoryObj<typeof meta>;

const initialValues = {
  "title": "La La Land",
  "tagline": "Here's to the fools who dream.",
  "vote_average": 7.9,
  "vote_count": 6782,
  "release_date": "2016-12-29",
  "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
  "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
  "budget": 30000000,
  "revenue": 445435700,
  "runtime": 128,
  "genres": [
    "Comedy",
    "Drama",
    "Romance"
  ],
  "id": 313369
}

export const initialValue: Story = {
  args: {
    initialData: initialValues,

  },
};


