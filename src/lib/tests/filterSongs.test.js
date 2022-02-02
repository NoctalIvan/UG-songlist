const {
    songFilter,
    songSort,
    paginate
} = require('../filterSongs')
const expect = require('expect')

const songs = [
    {id: 1, title: 'aa', artist: 'bb'},
    {id: 2, title: 'aaa', artist: 'cc'},
    {id: 3, title: 'bb', artist: 'aq'},
]

test('songFilter', () => {
    expect(songs.filter(song => songFilter(song, 'aa')).map(song => song.id)).toStrictEqual([1, 2])
    expect(songs.filter(song => songFilter(song, 'bb')).map(song => song.id)).toStrictEqual([1,3])
    expect(songs.filter(song => songFilter(song, 'a')).map(song => song.id)).toStrictEqual([1,2,3])
    expect(songs.filter(song => songFilter(song, 'q')).map(song => song.id)).toStrictEqual([3])
})

test('songSort', () => {
    expect(songSort(songs, {field: 'band_name', direction: -1}).map(song => song.id)).toStrictEqual([2,1,3])
    expect(songSort(songs, {field: 'band_name', direction: 1}).map(song => song.id)).toStrictEqual([3,1,2])
    expect(songSort(songs, {field: 'song_name', direction: -1}).map(song => song.id)).toStrictEqual([3,2,1])
    expect(songSort(songs, {field: 'song_name', direction: 1}).map(song => song.id)).toStrictEqual([1,2,3])
})

test('paginate', () => {
    const longList = []
    for(let i = 0; i < 95; i ++) {
        longList.push(i)
    }

    expect(paginate(longList, 0)).toStrictEqual(longList.slice(0,20))
    expect(paginate(longList, 2)).toStrictEqual(longList.slice(40,60))
    expect(paginate(longList, 4)).toStrictEqual(longList.slice(80))
    expect(paginate(longList, 100)).toStrictEqual([])
})