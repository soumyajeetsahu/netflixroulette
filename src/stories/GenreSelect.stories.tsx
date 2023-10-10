import type { Meta, StoryObj } from '@storybook/react';
import GenreSelect from '../components/Genre/genreSelect';
import { Genres } from '../components/Genre/genres';
import React from 'react';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'GenreSelect',
    component: GenreSelect,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const selectedGenreDark: Story = {
    args: {
        genres: Genres,
        selectedGenre: "ALL",
        onSelect: action('Genre Changed To')
    },
    render: (args) => <div style={{ backgroundColor: '#232323' }}><GenreSelect {...args} /></div>

};