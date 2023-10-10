import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Counter from '../components/counter/counter';

const meta = {
  title: 'Counter',
  component: Counter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Counter>;;

export default meta;
type Story = StoryObj<typeof meta>;

export const initialValue: Story = {
  args: {
    initialValue: 5
  },
};

