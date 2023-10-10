import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MovieForm from '../components/modals/MovieForm/movieForm';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/styles';


const meta = {
  title: 'Add Movie',
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


export const initialValue: Story = {
  args: {
    onSubmit: action('Submit clicked'),
    onClose: action('')
  },
};


