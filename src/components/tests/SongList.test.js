import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SongList from '../SongList';
import expect from 'expect'

const mockSongList = [
    {artist: 'azer', title: 'ty', link: 'lk'},
]

test('renders with songs', async () => {
    const component = await render(<SongList songListData={mockSongList} />);
    const songs = await component.container.getElementsByClassName('MuiListItem-root')
    expect(songs.length).toBe(1)

    const song = songs[0]
    expect(song.firstChild.children[0]).toHaveClass('MuiListItemText-primary')
    expect(song.firstChild.children[0].innerHTML).toBe('ty')
    expect(song.firstChild.children[1]).toHaveClass('MuiListItemText-secondary')
    expect(song.firstChild.children[1].innerHTML).toBe('azer')

    const link = song.nextSibling.firstChild
    expect(link).toHaveClass('MuiButtonBase-root')
});