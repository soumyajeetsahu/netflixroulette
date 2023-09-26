import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieForm from '../modals/MovieForm/movieForm';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';


describe('MovieForm', () => {

  test('add movie form to be empty and handles the submit event', () => {
    const handleSubmit = jest.fn();

    render(<div id="portal-root"><MovieForm onSubmit={handleSubmit} onClose={() => { }} /></div>);

    const titleInputParent = screen.getByTestId('titleInput');
    const inputTitle = within(titleInputParent).getByRole('textbox') as HTMLInputElement;
    expect(inputTitle.value).toBe('');

    const submitButton = screen.getByText(/^SUBMIT$/i);
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('initialData updates form values', () => {
    const initialData = {
      title: 'Test Movie Name',
      releaseDate: dayjs('1994-02-28'),
      movieUrl: 'https://demomovie.com',
      rating: 9.2,
      genre: ['ACTION'],
      runtime: '2h 43min',
      overview: 'Some description',
    };

    render(<MovieForm initialData={initialData} onSubmit={() => {}} onClose={() => {}} />);
    const titleInputParent = screen.getByTestId('titleInput');
    const inputTitle = within(titleInputParent).getByRole('textbox') as HTMLInputElement;
    expect(inputTitle.value).toBe('Test Movie Name');
  });
});