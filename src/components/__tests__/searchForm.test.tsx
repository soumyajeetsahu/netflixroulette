import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../SearchForm/searchForm';
import userEvent from '@testing-library/user-event';

test('renders an input with the initial search query passed in props', () => {
    render(<SearchForm initialQuery="initial value" onSearch={() => {}} />);
    const input = screen.getByPlaceholderText('What do you want to watch?') as HTMLInputElement;
    expect(input.value).toBe('initial value');
  });


  test('calls the "onSearch" prop with the proper value after typing in the input and clicking the Search button', () => {
    const handleOnSearch = jest.fn();
    render(<SearchForm initialQuery="" onSearch={handleOnSearch} />);
  
    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'test movie' } });
  
    const submitButton = screen.getByText(/^Search$/i);
    fireEvent.click(submitButton);
  
    expect(handleOnSearch).toHaveBeenCalledTimes(1);
    expect(handleOnSearch).toHaveBeenCalledWith('test movie');
  });

  test('calls the "onSearch" prop with the proper value after typing in the input and pressing Enter key', () => {
    const handleOnSearch = jest.fn();
    render(<SearchForm initialQuery="" onSearch={handleOnSearch} />);
    
    const input = screen.getByPlaceholderText('What do you want to watch?');

    userEvent.type(input, "test movie");
    userEvent.type(input, "{enter}");
  
    expect(handleOnSearch).toHaveBeenCalledTimes(1);
    expect(handleOnSearch).toHaveBeenCalledWith('test movie');
  });