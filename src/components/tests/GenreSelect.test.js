import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelect from '../GenreSelect';
import expect from 'expect'

test('renders with initial state [true, true, true]', () => {
    const genreSelect = render(<GenreSelect />);

    const buttons = genreSelect.container.children[0].children
    expect(buttons[0]).toHaveClass('MuiButton-contained')
    expect(buttons[0]).toHaveClass('MuiButton-contained')
    expect(buttons[0]).toHaveClass('MuiButton-contained')
});

test('click one button disables it and calls props', async () => {
    let lastOnChangeValue = null
    const onChange = (value) => {
        lastOnChangeValue = value
    }
    const genreSelect = await render(<GenreSelect onChange={onChange}/>);
    expect(lastOnChangeValue).toBe(null)

    const buttons = genreSelect.container.children[0].children
    fireEvent.click(buttons[0]) 

    expect(buttons[0]).not.toHaveClass('MuiButton-contained')
    expect(buttons[0]).toHaveClass('MuiButton-outlined')
    expect(lastOnChangeValue).toStrictEqual({
        rock: false,
        pop: true,
        chill: true
    })
});