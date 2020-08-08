import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import expect from 'expect'

test('renders', async () => {
    const searchBar = await render(<SearchBar />);
    const barElements = await searchBar.container.getElementsByClassName('MuiInputBase-input')
    expect(barElements.length).toBe(1)
});

test('calls prop on update', async () => {
    let lastOnInputValue = null
    const OnInput = (value) => {
        lastOnInputValue = value
    }
    const searchBar = await render(<SearchBar onInput={OnInput}/>);
    expect(lastOnInputValue).toBe(null)

    const barElement = await searchBar.container.getElementsByClassName('MuiInputBase-input')[0]
    fireEvent.input(barElement, {
        target: {
            value: 'azer'
        }
    })
    
    expect(lastOnInputValue).toBe('azer')
});