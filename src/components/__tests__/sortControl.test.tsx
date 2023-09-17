import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SortControl, { SortControlProps } from '../SortControl/sortControl';
import { SortBy } from '../SortControl/sortBy';

describe('<SortControl />', () => {
    const props: SortControlProps = {
        sortByList: SortBy,
        defaultValue: 'RELEASE DATE',
        onSortByChange: jest.fn(),
    };

    test('calls onSortByChange callback when selected value changes', () => {
        const { getByText } = render(<SortControl {...props} />);
        fireEvent.mouseDown(screen.getByRole('button'));

        const newOption = getByText(props.sortByList[1].value);
        fireEvent.click(newOption);

        expect(props.onSortByChange).toHaveBeenCalledWith(props.sortByList[1].value);
    });
});

