import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

test('renders the initial value', () => {
  render(<Counter initialValue={5} />);
  expect(screen.getByText('Value: 5')).toBeInTheDocument();
});

test('renders the initial value 0', () => {
  render(<Counter />);
  expect(screen.getByText('Value: 0')).toBeInTheDocument();
});

test('increments the counter value', () => {
  render(<Counter initialValue={5} />);
  const incrementButton = screen.getByText(/Increment/);
  fireEvent.click(incrementButton);
  expect(screen.getByText('Value: 6')).toBeInTheDocument();
});

test('decrement the counter value', () => {
  render(<Counter initialValue={5} />);
  const incrementButton = screen.getByText(/Decrement/);
  fireEvent.click(incrementButton);
  expect(screen.getByText('Value: 4')).toBeInTheDocument();
});