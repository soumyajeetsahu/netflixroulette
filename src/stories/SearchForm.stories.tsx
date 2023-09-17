import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from '../components/SearchForm/searchForm';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'SearchForm',
    component: SearchForm,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SearchForm>;


export default meta;
type Story = StoryObj<typeof meta>;

export const initialQuery: Story = {
    args: {
        initialQuery: "Test Movie Name",
        onSearch: action('Search Text')
    },
};
