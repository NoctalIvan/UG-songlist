import normalizeStr from './normalizeString'

export const songFilter = (song, filter) => {
    return normalizeStr(song.title).includes(filter) || normalizeStr(song.artist).toLowerCase().includes(filter)
}

export const songSort = (songs, sort) => {
    return songs.slice().sort((a, b) => sort.direction * (a[sort.field].localeCompare(b[sort.field])))
}

export const paginate = (songs, page) => {
    return songs.slice(page*20, page*20 + 20)
}
