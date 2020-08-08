import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SongListPage from '../SongListPage';
import expect from 'expect'
import SongList from '../../components/SongList';

const mockSongList = [
    {artist: 'azer', title: 'ty', link: 'lk'},
]

test('renders', async () => {
    const page = await render(<SongListPage songListData={mockSongList} />);
    const songs = await page.container.getElementsByClassName('MuiContainer-root')
    expect(songs.length).toBe(1)
});
