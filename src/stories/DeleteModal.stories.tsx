import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DeleteMovie from '../components/modals/deleteMovie/deleteMovie';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/styles';

const meta = {
  title: 'Delete Movie',
  component: DeleteMovie,
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
} satisfies Meta<typeof DeleteMovie>;;

export default meta;
type Story = StoryObj<typeof meta>;

export const initialValue: Story = {
  args: {
    
  },
};

