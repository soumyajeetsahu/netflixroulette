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
    title: 'Test Movie Name',
    releaseDate: dayjs('1994-02-28'),
    movieUrl: 'https://demomovie.com',
    rating: 9.2,
    genre: ['ACTION'],
    runtime: '2h 43min',
    overview: 'Some description',
  };

export const initialValue: Story = {
  args: {
    initialData: initialValues,
    onSubmit: action('Submit clicked'),
    onClose: action('')
  },
};


