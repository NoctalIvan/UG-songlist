import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortingSelect from '../SortingSelect';
import expect from 'expect'

test('renders', async () => {
    const sortingSelect = await render(<SortingSelect value={{field: 'title', direction: 1}}/>);
    const selects = await sortingSelect.container.getElementsByClassName('MuiInputBase-root')
    expect(selects.length).toBe(1)
    expect(selects[0].firstChild.innerHTML).toBe('Title ▲')
});

test('renders with artist down', async () => {
    const sortingSelect = await render(<SortingSelect value={{field: 'artist', direction: -1}}/>);
    const select = await sortingSelect.container.getElementsByClassName('MuiInputBase-root')[0]
    expect(select.firstChild.innerHTML).toBe('Artist ▼')
});

test('on change', async () => {
    let changeValue = null
    const onChange = (value) => {
        changeValue = value
    }

    const sortingSelect = await render(<SortingSelect value={{field: 'artist', direction: -1}} onChange={onChange}/>);
    const select = await sortingSelect.container.getElementsByClassName('MuiInputBase-root')[0]

    fireEvent.change(select.children[1], {target: {value: 'title_down'}})
    expect(changeValue).toStrictEqual({ field: 'title', direction: -1 })
})
